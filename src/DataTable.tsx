import "./dataTable.scss";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Entries from "./components/Entries";
import Table from "./components/Table/Table";
import employees from "./data/employees.json";

function DataTable() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [entriesValue, setEntriesValue] = useState("");

  return (
    <div>
      <div className="headerTable">
        <Entries setEntriesValue={setEntriesValue} />
        <SearchBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
      </div>
      <Table tableData={employees} entriesValue={entriesValue} searchBarValue={searchBarValue} />
    </div>
  );
}

export default DataTable;
