import React, { useEffect, useState } from "react";
import "./reportusers.scss";
import axios from "axios";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from "@mui/material";

const ReportUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showActive, setShowActive] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  console.log(setShowActive , fromDate , toDate)
  //Data fetching
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
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

  const handlefromdate = (e) => {
    setFromDate(e.target.value);
  };

  const handletodate = (e) => {
    setToDate(e.target.value);
  };
  function handleChange(event, value) {
    setCurrentPage(value);
  }
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className="user-report">
      <div className="user-report-fist-head">
        <h4>Users Reports</h4>
      </div>
      <br />
      <div className="user-report-date-div">
        <table>
          <tr>
            <td>
              <label htmlFor="">From</label>
            </td>
            <td>
              <input
                type="Date"
                placeholder="From Date"
                onChange={handlefromdate}
              />
            </td>
            <td>
              <label htmlFor="">To</label>
            </td>
            <td>
              <input
                type="Date"
                placeholder="To Date"
                onChange={handletodate}
              />
            </td>
            <td>
              {" "}
              <button type="button">Submit</button>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div className="user-report-second-head">
        <div className="user-report-rows-per-page">
          <label>Show </label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <label>Entries</label>
        </div>

        <div className="user-report-search-div">
          <label htmlFor="search" id="user-report-search-id">
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
      <div className="table-responsive third-head">
        <table className="table table-div">
          <thead>
            <tr>
              <th>Activation Date</th>
              <th>Registration No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>-</td>
                <td>-</td>
                <td>{row.name}</td>
                <td>M/F</td>
                <td className="user-report-status">
                  {showActive ? (
                    <span className="user-report-status-span">
                      <p id="user-report-active-status"></p>Active
                    </span>
                  ) : (
                    <span className="user-report-status-span">
                      <p id="user-report-pending-status"></p>Pending
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="user-report-fourth-div">
        <div className="user-report-pagination">
          <div>
            <h5>
              Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
              {records.length} Entries
            </h5>
          </div>
          <div className="user-report-btn-div">
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

export default ReportUsers;