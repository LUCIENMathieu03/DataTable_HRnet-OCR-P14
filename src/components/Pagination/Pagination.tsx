import "./pagination.scss";

type DataTableType = {
  [key: string]: string;
}[];

type PaginationType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  entriesValue: number;
  tableToUse: DataTableType;
  totalPages: number;
  employeeDisplayed: (table: DataTableType) => DataTableType;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  entriesValue,
  tableToUse,
  totalPages,
  employeeDisplayed,
}: PaginationType) {
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
    <div className="pagination  theTable_footer">
      <div className="pagination_text">
        Showing {(currentPage - 1) * entriesValue + 1} to{" "}
        {(currentPage - 1) * entriesValue + employeeDisplayed(tableToUse).length} of {tableToUse.length} entries{" "}
      </div>
      <div className="pagination_button">
        <button key="previousButton" onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)}>
          <span className="controlButton_arrow">{`<`}</span> <span className="controlButton_text">Previous</span>
        </button>

        {paginationButtons().map((page, index) => {
          if (page === "...") {
            return (
              <select
                value={currentPage}
                key={index}
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                className={`paginationSelect ${currentPage > 2 && currentPage < totalPages - 1 ? "active" : ""}`}
              >
                {Array.from({ length: totalPages }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    Page {index + 1}
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
        })}

        <button
          key="nextButton"
          onClick={() => setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1)}
        >
          <span className="controlButton_text">Next</span> <span className="controlButton_arrow"> {`>`}</span>
        </button>
      </div>
    </div>
  );
}
