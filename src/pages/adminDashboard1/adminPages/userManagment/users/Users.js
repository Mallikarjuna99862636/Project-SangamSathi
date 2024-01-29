import React, { useEffect, useState } from "react";
import "./users.scss";
import axios from "axios";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
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
  console.log(setShowActive)

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
          <select name="" id="" className="select-type-user">
            <option value="" selected>
              All Users
            </option>
            <option value="">Premium Users</option>
            <option value="">Silver Users</option>
            <option value="">Free Users</option>
          </select>
        </div>
        <br />
        <div className="second-head">
          <div className="rows-per-page">
            <label>Show </label>
           
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="search-div">
            <label htmlFor="search" id="search-id">
              Search :{" "}
            </label>
            <input
              className="search-field"
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
          <table class="table table-div">
            <thead>
              <tr>
                <th></th>
                <th>Registration No</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Gender</th>
                <th>User_Type</th>
                <th>Satus</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                 <td>{row.id}</td>
                  <td>-</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>M/F</td>
                  <td>-</td>
                  <td className="userdata-status">
                    {showActive ? (
                      <span className="status-span">
                        <p id="active-status"></p>Active
                      </span>
                    ) : (
                      <span className="status-span">
                        <p id="pending-status"></p>Pending
                      </span>
                    )}
                  </td>
                  <td className="userdata-status-change">
                    {showActive ? (
                      <button className="pending-status-btn">
                        <DeleteSharpIcon /> <br />
                        INACTIVE
                      </button>
                    ) : (
                      <button className="active-status-btn">
                        <CheckSharpIcon /> <br />
                        ACTIVE
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
