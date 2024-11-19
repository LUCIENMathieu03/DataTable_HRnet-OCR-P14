// type DataTableType = {
//   city: string;
//   dateOfBirth: string;
//   department: string;
//   firstName: string;
//   lastName: string;
//   startDate: string;
//   state: string;
//   street: string;
//   zipCode: string;
// }[];
// type TableKeyType = "firstName" | "lastName" | "startDate" | "state" | "street" | "zipCode" | "dateOfBirth" | "city";

type DataTableType = {
  [key: string]: string;
}[];

export const ascending = (dataTable: DataTableType, tableKey: string) => {
  const sortedTable = [...dataTable].sort((a, b) => {
    if (tableKey === "dateOfBirth" || tableKey === "startDate") {
      const dateA = new Date(a[tableKey]);
      const dateB = new Date(b[tableKey]);
      return dateA.getTime() - dateB.getTime();
    }

    if (a[tableKey] < b[tableKey]) return -1;
    if (a[tableKey] > b[tableKey]) return 1;
    return 0;
  });

  return sortedTable;
};

export const descending = (dataTable: DataTableType, tableKey: string) => {
  const sortedTable = [...dataTable].sort((a, b) => {
    if (tableKey === "dateOfBirth" || tableKey === "startDate") {
      const dateA = new Date(a[tableKey]);
      const dateB = new Date(b[tableKey]);
      return dateB.getTime() - dateA.getTime();
    }

    if (a[tableKey] > b[tableKey]) return -1;
    if (a[tableKey] < b[tableKey]) return 1;
    return 0;
  });

  return sortedTable;
};
