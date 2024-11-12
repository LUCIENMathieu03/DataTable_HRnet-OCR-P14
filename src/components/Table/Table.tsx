import { useState } from "react";
import "./table.scss";
import "../../utils/sorting";
import { ascending, descending } from "../../utils/sorting";

type DataType = {
  tableData: {
    city: string;
    dateOfBirth: string;
    department: string;
    firstName: string;
    lastName: string;
    startDate: string;
    state: string;
    street: string;
    zipCode: string;
  }[];
};
type SelectedState = {
  [key: string]: "up" | "down" | null;
};

export default function Table({ tableData }: DataType) {
  const [employeesTable, setEmployeesTable] = useState([...tableData]);
  const [selected, setSelected] = useState<SelectedState>({});

  //Check if the state "selected" contains a given key
  const hasSelectedKey = (key: string) => Object.prototype.hasOwnProperty.call(selected, key);

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
          <th className="dataTable_titles_firstName">
            <span>
              First Name
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "firstName")}>
                <span className={`up ${selected.firstName === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.firstName === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_lastName">
            <span>
              Last Name
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "lastName")}>
                <span className={`up ${selected.lastName === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.lastName === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_startDate">
            <span>
              Start Date
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "startDate")}>
                <span className={`up ${selected.startDate === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.startDate === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_dateOfBirth">
            <span>
              Date of Birth
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "dateOfBirth")}>
                <span className={`up ${selected.dateOfBirth === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.dateOfBirth === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_street">
            <span>
              Street
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "street")}>
                <span className={`up ${selected.street === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.street === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_city">
            <span>
              City
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "city")}>
                <span className={`up ${selected.city === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.city === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_state">
            <span>
              State
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "state")}>
                <span className={`up ${selected.state === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.state === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
          <th className=" dataTable_titles_zipCode">
            <span>
              Zip Code
              <div className="arrow" onClick={(e) => handleClickedArrow(e, "zipCode")}>
                <span className={`up ${selected.zipCode === "up" && "arrow-selected"}`}>▲</span>
                <span className={`down ${selected.zipCode === "down" && "arrow-selected"}`}>▼</span>
              </div>
            </span>
          </th>
        </tr>
      </thead>
      <tbody className="dataTable_data">
        {employeesTable.map((item, index) => (
          <tr key={index}>
            <td className={`col-firstName ${hasSelectedKey("firstName") ? "selectedCol" : ""}`}>{item.firstName}</td>
            <td className={`col-lastName ${hasSelectedKey("lastName") ? "selectedCol" : ""}`}>{item.lastName}</td>
            <td className={`col-startDate ${hasSelectedKey("startDate") ? "selectedCol" : ""}`}>{item.startDate}</td>
            <td className={`col-dateOfBirth ${hasSelectedKey("dateOfBirth") ? "selectedCol" : ""}`}>
              {item.dateOfBirth}
            </td>
            <td className={`col-street ${hasSelectedKey("street") ? "selectedCol" : ""}`}>{item.street}</td>
            <td className={`col-city ${hasSelectedKey("city") ? "selectedCol" : ""}`}>{item.city}</td>
            <td className={`col-state ${hasSelectedKey("state") ? "selectedCol" : ""}`}>{item.state}</td>
            <td className={`col-zipCode ${hasSelectedKey("zipCode") ? "selectedCol" : ""}`}>{item.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
