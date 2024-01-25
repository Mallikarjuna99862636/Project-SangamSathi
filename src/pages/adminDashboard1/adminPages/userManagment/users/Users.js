import React, { useEffect, useState } from "react";
import "./users.scss";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  Button,
} from "@mui/material";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showActive, setShowActive] = useState(true);

  //Data fetching
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
    console.warn(1);
  }, []);

  //set the search state
  const searchhandle = (event) => {
    setSearch(event.target.value);
  };

  //filter the current row data
  const filterCurrentRowData = currentRows.filter((data) => {
    return (
      search === null ||
      data.id.toString().includes(search.toString()) ||
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.username.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.phone.toLowerCase().includes(search.toLowerCase()) ||
      data.address.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  function handlehandle() {
    setCurrentPage(currentPage - 1);
  }

  function handlenext() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="user-data">
        <div className="fist-head">
          <h4 className="user-heading">Users</h4>
          {/* <FormControl variant="outlined">
            <InputLabel id="user-type-label">User Type</InputLabel>
            <Select className="select-items" labelId="user-type-label" id="user-type" label="User Type">
              <MenuItem value="">
                <em>All Users</em>
              </MenuItem>
              <MenuItem value="premium">Premium Users</MenuItem>
              <MenuItem value="silver">Silver Users</MenuItem>
              <MenuItem value="free">Free Users</MenuItem>
            </Select>
          </FormControl> */}
          <FormControl variant="outlined">
          <InputLabel id="user-type-label">User Type</InputLabel>
          <Select
                size="small"
                className="select-type-user"
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="User Type"
                // value={selectParentType}
                // onChange={(e) => setSelectParentType(e.target.value)}
              >
                <MenuItem value="premium">Premium Users</MenuItem>
                <MenuItem value="silver">Silver Users</MenuItem>
                <MenuItem value="free">Free Users</MenuItem>
              </Select>
              </FormControl>
        </div>
        <br />
        <div className="second-head">
          <div className="rows-per-page">
            <label>Show </label>
            <FormControl>
              <Select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
            <label>Entries</label>
          </div>

          <div className="search-div">
            <label htmlFor="search" id="search-id">
              Search :{" "}
            </label>
            <Input
              type="text"
              id="search"
              onChange={searchhandle}
              placeholder="Search"
              autoComplete="off"
            />
          </div>
        </div>
        <br />
        <div class="table-responsive third-head">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Registration No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email Id</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>User_Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Change Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterCurrentRowData.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>-</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>M/F</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="userdata-status">
                      {showActive ? (
                        <span className="status-span">
                          <p id="active-status"></p>Active
                        </span>
                      ) : (
                        <span className="status-span">
                          <p id="pending-status"></p>Pending
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="userdata-status-change">
                      {showActive ? (
                        <Button
                          className="pending-status-btn"
                          variant="contained"
                          color="secondary"
                        >
                          <MdDelete /> <br />
                          INACTIVE
                        </Button>
                      ) : (
                        <Button
                          className="active-status-btn"
                          variant="contained"
                          color="primary"
                        >
                          <FaCheck /> <br />
                          ACTIVE
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="fourth-div">
          <div className="pagination">
            <div>
              <h5>
                Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
                {records.length} Entries
              </h5>
            </div>
            <div className="btn-div">
              <button onClick={handlehandle} disabled={currentPage === 1}>
                Prev
              </button>
              ...
              <button
                onClick={handlenext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
