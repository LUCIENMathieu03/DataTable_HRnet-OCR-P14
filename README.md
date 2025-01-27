# DataTable

## Overview

`DataTable` is a React component that automatically generates and displays a table based on the structure of the data provided.

---

## Prerequisites

- **Node.js**: >= 18.x
- **Recommended Editor**: Visual Studio Code (VSCode)
- **Frameworks**: React >= 18.x
- **Languages**: JavaScript (required), TypeScript (optional)

---

## Installation

To use the `DataTable` component in your React project, install it using the following command:

```bash
npm i datatable-ml03
```

Ensure that your project meets the prerequisites listed above. Once installed, you can import and use the component as shown in the [Usage](#usage) section.

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
- Displays data in rows.
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

## 📖 How to start the project for development?

### Clone the repository:

```bash
git clone https://github.com/LUCIENMathieu03/DataTable_HRnet-OCR-P14.git
cd DataTable_HRnet
```

### Install dependencies:

```bash
npm install
```

### Start the application in development mode:

```bash
npm run dev
```

### Build the project for production:

```bash
npm run build
```

### Preview the production build:

```bash
npm run preview
```

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
