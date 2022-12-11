import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ data, columns }) => {
  const [tableData, setTableData] = React.useState(data);
  const [sortDirection, setSortDirection] = React.useState('asc');
  const [selectedRow, setSelectedRow] = React.useState(null);

  const toggleSort = (column) => {
    const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedData = [...tableData].sort((a, b) => {
      if (a[column] < b[column]) {
        return newSortDirection === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return newSortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setTableData(sortedData);
    setSortDirection(newSortDirection);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row.id);
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>
              {column.label}{' '}
              <Button
                variant="link"
                onClick={() => toggleSort(column.id)}
              >
                {sortDirection === 'asc' ? '↓' : '↑'}
              </Button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr
            key={row.id}
            onClick={() => handleRowClick(row)}
            style={{
              backgroundColor:
                selectedRow === row.id ? '#dff0d8' : '#f2dede',
            }}
          >
            {columns.map((column) => (
              <td key={column.id}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;

