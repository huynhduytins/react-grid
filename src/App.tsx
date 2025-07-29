import * as React from "react";
import { ReactGrid, type Column, type Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { BaseGrid } from "./components/BaseGrid";

interface Person {
  name: string;
  surname: string;
  age: number
}

const getPeople = (): Person[] => [
  { name: "Thomas", surname: "Goldman", age: 50 },
  { name: "Susie", surname: "Quattro", age: 20 },
];

const getColumns = (): Column[] => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 },
  { columnId: "age", width: 150 },
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name", colspan: 2, style: {background: 'red'}},
    { type: "header", text: "Surname" },
    { type: "header", text: "Age" },
  ]
};

const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name, colspan: 2},
      { type: "text", text: person.surname },
      { type: "number", value: person.age }
    ]
  }))
];

export default function App() {
  const [people] = React.useState<Person[]>(getPeople());
  
  const rows = getRows(people);
  const columns = getColumns();

  return <BaseGrid headerRows={rows} columns={columns} />;
}
