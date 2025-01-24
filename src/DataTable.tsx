import "./dataTable.scss";
import "./base.scss";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Entries from "./components/Entries";
import Table from "./components/Table/Table";

type TableType = {
  [key: string]: string;
}[];
export type DataTableType = {
  dataTable: TableType;
};

function DataTable({ dataTable }: DataTableType) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [entriesValue, setEntriesValue] = useState(10);

  return (
    <>
      {dataTable.length === 0 ? (
        <div className="noData">There is no data to show</div>
      ) : (
        <div className="theTable">
          <div className="theTable_header">
            <Entries setEntriesValue={setEntriesValue} />
            <SearchBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
          </div>
          <Table tableData={dataTable} entriesValue={entriesValue} searchBarValue={searchBarValue} />
        </div>
      )}
    </>
  );
}

export default DataTable;
