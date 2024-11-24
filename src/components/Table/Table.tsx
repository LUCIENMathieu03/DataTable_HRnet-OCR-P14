import { useEffect, useState } from "react";
import "./table.scss";
import "../../utils/sorting";
import { ascending, descending, searchInDataTable } from "../../utils/sorting";

type DataType = {
  tableData: {
    [key: string]: string;
  }[];
  entriesValue: number;
  searchBarValue: string;
};
type SelectedStateType = {
  [key: string]: "up" | "down";
};
type DataTableType = {
  [key: string]: string;
}[];

export default function Table({ tableData, entriesValue, searchBarValue }: DataType) {
  const employeesTable = [...tableData];
  const [tableToUse, setTableToUse] = useState<DataTableType>(employeesTable); // determine witch table should be used (searchTable or initial employeeTable)
  const [selected, setSelected] = useState<SelectedStateType>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(employeesTable.length / entriesValue));
  const [isMobileView, setIsMobileView] = useState(window.innerWidth > 768);

  useEffect(() => {
    const newTableToUse =
      searchBarValue.length > 0 ? searchInDataTable(employeesTable, searchBarValue) : employeesTable;

    if (newTableToUse !== tableToUse) {
      setTableToUse(newTableToUse);
      setSelected({}); // Reset filter on search
      setCurrentPage(1); // Return to the first page if the data table change (ex: when making a search)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarValue]);

  useEffect(() => {
    const newTotalPages = Math.ceil(tableToUse.length / entriesValue);
    if (newTotalPages !== totalPages) {
      setTotalPages(newTotalPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entriesValue, tableToUse]);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Return a table based on the entries number and the pagination
  const employeeDisplayed = (table: DataTableType) => {
    return table.slice((currentPage - 1) * entriesValue, currentPage * entriesValue);
  };

  //Check if the state "selected" contains a given key
  const hasSelectedKey = (key: string) => {
    return Object.hasOwnProperty.call(selected, key);
  };

  const formatString = (input: string) => {
    return input
      .replace(/([A-Z])/g, " $1") // add a space before each majuscule
      .replace(/^\s*/, "") // remove the space at the begining
      .toLowerCase() // Put all the string in minuscule
      .replace(/^./, (char: string) => char.toUpperCase()); // Add the first letter in majuscule
  };

  const handleClickedArrow = (e: React.MouseEvent<HTMLDivElement>, selectedOption: string) => {
    const arrowTarget = e.target as HTMLElement;
    const direction = arrowTarget.classList.contains("up") ? "up" : "down";

    if (direction === "up") {
      setSelected({ [selectedOption]: "up" });
      setTableToUse(ascending(tableToUse, selectedOption));
      setCurrentPage(1);
    } else if (direction === "down") {
      setSelected({ [selectedOption]: "down" });
      setTableToUse(descending(tableToUse, selectedOption));
      setCurrentPage(1);
    }
  };

  const paginationButtons = () => {
    const buttons = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1, 2, "...", totalPages - 1, totalPages);
    }
    return buttons;
  };

  return (
    <>
      <table className="dataTable">
        <thead>
          <tr className="dataTable_titles">
            {Object.keys(employeesTable[0]).map((item, index) => (
              <th key={index}>
                <span>
                  <div className="arrow" onClick={(e) => handleClickedArrow(e, `${item}`)}>
                    <span className={`up ${selected[item] === "up" && "arrow-selected"}`}>▲</span>
                  </div>
                  {formatString(item)}
                  <div className="arrow" onClick={(e) => handleClickedArrow(e, `${item}`)}>
                    <span className={`down ${selected[item] === "down" && "arrow-selected"}`}>▼</span>
                  </div>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="dataTable_data">
          {tableToUse.length === 0 && searchBarValue.length !== 0 ? (
            <tr className="noMatchSearch">
              <td colSpan={100}>No matching records found</td>
            </tr>
          ) : (
            employeeDisplayed(tableToUse).map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key, index) => (
                  <td key={`${key}-${index}`} className={`${hasSelectedKey(key) ? "selectedCol" : ""}`}>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        <div className="pagination_text">
          Showing {(currentPage - 1) * entriesValue + 1} to{" "}
          {(currentPage - 1) * entriesValue + employeeDisplayed(tableToUse).length} of {tableToUse.length} entries{" "}
        </div>
        <div className="pagination_button">
          <button
            key="previousButton"
            onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)}
            className={`active`}
          >
            <span className="controlButton_arrow">{`<`}</span> <span className="controlButton_text">Previous</span>
          </button>

          {isMobileView ? (
            paginationButtons().map((page, index) => {
              if (page === "...") {
                return (
                  <select
                    value={currentPage}
                    key={index}
                    onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                    className={`paginationSelect ${currentPage > 2 && currentPage < totalPages - 1 ? "active" : ""}`}
                  >
                    {Array.from({ length: totalPages }, (_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        Page {idx + 1}
                      </option>
                    ))}
                  </select>
                );
              } else {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(parseInt(`${page}`))}
                    className={`paginationNumber ${currentPage === page ? "active" : ""}`}
                  >
                    {page}
                  </button>
                );
              }
            })
          ) : (
            <select
              value={currentPage}
              key="mobileSelect"
              onChange={(e) => setCurrentPage(parseInt(e.target.value))}
              className={`paginationSelect ${currentPage > 2 && currentPage < totalPages - 2 ? "active" : ""}`}
            >
              {Array.from({ length: totalPages }, (_, idx) => (
                <option key={idx + 1} value={idx + 1}>
                  Page {idx + 1}
                </option>
              ))}
            </select>
          )}

          <button
            key="nextButton"
            onClick={() => setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1)}
            className={`active`}
          >
            <span className="controlButton_text">Next</span> <span className="controlButton_arrow"> {`>`}</span>
          </button>
        </div>
      </div>
    </>
  );
}
