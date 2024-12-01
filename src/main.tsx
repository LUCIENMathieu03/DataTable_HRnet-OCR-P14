import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataTable from "./DataTable.tsx";
// import employees from "./data/employees.json";
import employeesX2 from "./data/employeesX2.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="mainDiv">
      <DataTable dataTable={employeesX2} />
    </div>
  </StrictMode>
);
