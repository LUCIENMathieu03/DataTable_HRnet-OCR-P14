import { useState } from "react";
import "./table.scss";
import "../../utils/sorting";
import { ascending, descending } from "../../utils/sorting";

type DataType = {
  tableData: {
    [key: string]: string;
  }[];
  entriesValue: string;
  searchBarValue: string;
};
type SelectedStateType = {
  [key: string]: "up" | "down";
};

export default function Table({ tableData, entriesValue, searchBarValue }: DataType) {
  const [employeesTable, setEmployeesTable] = useState([...tableData]);
  const [selected, setSelected] = useState<SelectedStateType>({});

  //Check if the state "selected" contains a given key
  const hasSelectedKey = (key: string) => Object.prototype.hasOwnProperty.call(selected, key);

  const formatString = (input: string) => {
    return input
      .replace(/([A-Z])/g, " $1") // Ajoute un espace avant chaque majuscule
      .replace(/^\s*/, "") // Supprime tout espace au début
      .toLowerCase() // Met tout en minuscule
      .replace(/^./, (char: string) => char.toUpperCase()); // Met la première lettre en majuscule
  };

  const handleClickedArrow = (e: React.MouseEvent<HTMLDivElement>, selectedOption: string) => {
    const arrowTarget = e.target as HTMLElement;
    const direction = arrowTarget.classList.contains("up") ? "up" : "down";

    if (direction === "up") {
      setSelected({ [selectedOption]: "up" });
      setEmployeesTable(ascending(employeesTable, selectedOption));
    } else if (direction === "down") {
      setSelected({ [selectedOption]: "down" });
      setEmployeesTable(descending(employeesTable, selectedOption));
    }
  };

  return (
    <table className="dataTable">
      <thead>
        <tr className="dataTable_titles">
          {Object.keys(employeesTable[0]).map((item) => (
            <th>
              <span>
                {formatString(item)}
                <div className="arrow" onClick={(e) => handleClickedArrow(e, `${item}`)}>
                  <span className={`up ${selected[item] === "up" && "arrow-selected"}`}>▲</span>
                  <span className={`down ${selected[item] === "down" && "arrow-selected"}`}>▼</span>
                </div>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="dataTable_data">
        {employeesTable.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key) => (
              <td className={`${hasSelectedKey(`${key}`) ? "selectedCol" : ""}`}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
