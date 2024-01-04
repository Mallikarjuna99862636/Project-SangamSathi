import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Adjust the API endpoint according to your actual API
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    axios.get(apiUrl)
      .then(response => {
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = tableData.filter((data) => {
    return (
      search === null ||
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.username.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search by Name or Country"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>SurName</TableCell>
              <TableCell>Email</TableCell>
              {/* Add more table headers based on your data structure */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;
