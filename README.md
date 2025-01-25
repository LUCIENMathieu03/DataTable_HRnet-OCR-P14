# DataTable

## Overview

`DataTable` is a React component that automatically generates and displays a table based on the structure of the data provided.

---

## Usage

Import the component and use it in your React application:

```javascript
import DataTable from "datatable";

function App() {
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "2018-03-01",
      dateOfBirth: "1985-07-12",
      street: "123 Main St",
      city: "Birmingham",
      state: "AL",
      zipCode: "35203",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2020-06-15",
      dateOfBirth: "1990-09-25",
      street: "456 Oak St",
      city: "Atlanta",
      state: "GA",
      zipCode: "30303",
    },
  ];

  return <DataTable dataTable={data} />;
}

export default App;
```

---

## **Features**

- Automatically generates table columns based on object keys.
- Displays data in rows for easy visualization.
- No need to manually specify columns or rows.

---

## **Props**

| Prop      | Type  | Description                                                                     |
| --------- | ----- | ------------------------------------------------------------------------------- |
| dataTable | Array | Array of objects representing the table data. Each object corresponds to a row. |

### Example `dataTable` structure:

```json
[
  {
    "firstName": "John",
    "lastName": "Doe",
    "startDate": "2018-03-01",
    "dateOfBirth": "1985-07-12",
    "street": "123 Main St",
    "city": "Birmingham",
    "state": "AL",
    "zipCode": "35203"
  },
  {
    "firstName": "Jane",
    "lastName": "Smith",
    "startDate": "2020-06-15",
    "dateOfBirth": "1990-09-25",
    "street": "456 Oak St",
    "city": "Atlanta",
    "state": "GA",
    "zipCode": "30303"
  }
]
```

---

## **Development**

If you want to contribute or test this component locally, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd datatable
npm install
npm start
```

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
