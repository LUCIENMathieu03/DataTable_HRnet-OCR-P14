import "./dataTable.scss";
import "./base.scss";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Entries from "./components/Entries";
import Table from "./components/Table/Table";

type TableType = {
  [key: string]: string;
}[];

type DataTableType = {
  dataTable: TableType;
};

function DataTable({ dataTable }: DataTableType) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [entriesValue, setEntriesValue] = useState(10);

  return (
    <div className="theTable">
      <div className="theTable_header">
        <Entries setEntriesValue={setEntriesValue} />
        <SearchBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
      </div>
      <Table tableData={dataTable} entriesValue={entriesValue} searchBarValue={searchBarValue} />
    </div>
  );
}

export default DataTable;
