import React, { useEffect, useState } from "react";
import "./pending.scss";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from '@mui/material';

const Pending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearchData, setShowSearchData] = useState(false);
  const [submit, setSubmit] = useState(false);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);

  // Data fetching
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

  // Set the search state
  const searchhandle = (event) => {
    setSearch(event.target.value);
  };

  // Filter the current row data
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

  // Filter data after submitting
  const aftersubmit = currentRows.filter(data => {
    if (submit) {
      return (
        search === null ||
        data.id.toString().includes(showSearchData.toString()) ||
        data.name.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.username.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.email.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.phone.toLowerCase().includes(showSearchData.toLowerCase()) ||
        (data.address && data.address.city.toLowerCase().includes(showSearchData.toLowerCase()))
      );
    } else {
      return true; 
    }
  });

  // Handle change in rows per page
  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  // Handle previous button click
  function handlePrev() {
    setCurrentPage(currentPage - 1);
  }

  // Handle next button click
  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  // Handle search data input
  function handleSearchData(e) {
    setShowSearchData(e.target.value);
    setSubmit(false);
  }

  // Handle search submit
  function handleSubmit() {
    setSubmit(true);
  }

  // Handle page change in pagination component
  function handleChange(event, value) {
    setCurrentPage(value);
  }

  return (
    <>
      <AdminHeader/>
      <AdminSidebar/>
      <div className="pending-user">
        <div className="pending-fist-head">
          <h4>Search For Email ID</h4>
          <div id="pending-email-div">
            <input
              type="email"
              placeholder="Enter Email ID"
              onChange={handleSearchData}
            />
            <button onClick={handleSubmit}>SEARCH</button>
          </div>
        </div>
        <br />
        <div className="pending-second-head">
          <div className="pending-rows-per-page">
            <label>Show </label>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="pending-search-div">
            <label htmlFor="search" id="pending-search-id">
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
                <th>Registration No</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Mobile No</th>
                <th>Caste</th>
                <th>User type</th>
                <th>Assistance</th>
              </tr>
            </thead>
            <tbody>
              {submit ? (
                <>
                  {aftersubmit.map((row, index) => (
                    <tr key={row.id}>
                      <td>-</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
                      <td>caste here</td>
                      <td>free/silver users</td>
                      <td className="assistance-active">
                        <button className="btn">
                          <FaCheck /> <br />
                          ACTIVE
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {filterCurrentRowData.map((row, index) => (
                    <tr key={row.id}>
                      <td>-</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
                      <td>caste here</td>
                      <td>free/silver users</td>
                      <td className="assistance-active">
                        <button className="btn">
                          <FaCheck /> <br />
                          ACTIVE
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="pending-fourth-div">
          <div className="pending-pagination">
            <div>
              <h5>
                Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
                {records.length} Entries
              </h5>
            </div>
            <div className="pending-btn-div">
              <button className="prev-button" onClick={handlePrev} disabled={currentPage === 1}>
                Prev
              </button>
              <div className="pending-pagination-count-div">
              <Pagination
              className="pending-pagination-count"
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                hideNextButton
                hidePrevButton
                variant="outlined"
                shape="rounded"
              />
              </div>
              <button className="nxt-btn" onClick={handleNext} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pending;
