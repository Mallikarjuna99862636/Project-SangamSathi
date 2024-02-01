import React, { useEffect, useState } from "react";
import axios from "axios";
import "./upgradeusers.scss";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from "@mui/material";

const UpgradeUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showActive, setShowActive] = useState(false);
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
  //filte the currentrow data
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


  function handleChange(event, value) {
    setCurrentPage(value);
  }

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
    <AdminHeader/>
    <AdminSidebar/>
    <div className="upgrade-user">
      <div className="upgrade-fist-head">
        <h4>Users</h4>
      </div>
      <br />
      <div className="upgrade-second-head">
        <div className="upgrade-rows-per-page">
          <label>Show </label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <label>Entries</label>
        </div>

        <div className="upgrade-search-div">
          <label htmlFor="search" id="upgrade-search-id">
            Search :{" "}
          </label>
          <input
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
              <th>Registration No</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Gender</th>
              <th>User_Type</th>
              <th>Satus</th>
              <th>Upgrade</th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>-</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>M/F</td>
                <td>-</td>
                <td className="upgrade-user-status">
                  {showActive ? (
                    <span className="status-span">
                      <p class="active-status"></p>Active
                    </span>
                  ) : (
                    <span className="status-span">
                      <p className="pending-status"></p>Pending
                    </span>
                  )}
                </td>
                <td className="upgrade-user-status-btn">
                  <button className="btn">
                    <CheckSharpIcon /> <br />
                    UPGRADE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="upgrade-fourth-div">
        <div className="upgrade-pagination">
          <div>
            <h5>
              Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
              {records.length} Entries
            </h5>
          </div>
          <div className="upgrade-btn-div">
          <button className="prev-button" onClick={handlehandle} disabled={currentPage === 1}>
                Prev
              </button>
              <div className="pagination-count-div">
              <Pagination
              className="pagination-count"
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                hideNextButton
                hidePrevButton
                variant="outlined"
                shape="rounded"
              />
              </div>
              <button
              className="nxt-button"
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

export default UpgradeUsers;
