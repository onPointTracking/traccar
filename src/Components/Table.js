import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./Table.css"

const columns = [
  { field: 'Name' },
  { field: 'Age', type: 'number' },
  {
    field: 'Username',
    valueGetter: (params) =>
      `${params.getValue('Name') || 'unknown'} - ${params.getValue('Age') || 'x'}`,
    sortComparator: (v1, v2, param1, param2) => param1.row.Age - param2.row.Age,
    width: 150,
  },
  { field: 'DateCreated', type: 'date', width: 180 },
  { field: 'LastLogin', type: 'dateTime', width: 180 },
];

const rows = [
  {
    id: 1,
    Name: 'Damien',
    Age: 25,
    DateCreated: 6657,
    LastLogin: 241232,
  },
  {
    id: 2,
    Name: 'Nicolas',
    Age: 36,
    DateCreated: 6657,
    LastLogin: 241232,
  },
  {
    id: 3,
    Name: 'Kate',
    Age: 19,
    DateCreated: 6657,
    LastLogin: 241232,
  },
  {
    id: 4,
    Name: 'Sebastien',
    Age: 28,
    DateCreated: 6657,
    LastLogin: 241232,
  },
  {
    id: 5,
    Name: 'Louise',
    Age: 23,
    DateCreated: 6657,
    LastLogin: 241232,
  },
  {
    id: 6,
    Name: 'George',
    Age: 10,
    DateCreated: 6657,
    LastLogin: 241232,
  },
];

const sortModel = [
  {
    field: 'Username',
    sort: 'asc',
  },
];


export default function ComparatorSortingGrid() {
  return (
    <div className="tableContainer">
      <DataGrid className="tableGrid" sortModel={sortModel} rows={rows} columns={columns} />
    </div>
  );
}