import React, { useEffect, useState } from "react";
import "./promotersusers.scss";
import axios from "axios";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from "@mui/material";

const PromoterUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);

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

  function handleChange(event, value) {
    setCurrentPage(value);
  }
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className="promotersmanagement-user">
      <div className="promotersmanagement-fist-head">
        <h4>PromoterUsers</h4>
        <select name="" id="" >
            <option value="" selected>
              All Users
            </option>
            <option value="">Premium Users</option>
            <option value="">Silver Users</option>
            <option value="">Free Users</option>
          </select>
      </div>
      <br />
      <div className="promotersmanagement-second-head">
          <div className="promotersmanagement-rows-per-page">
            <label>Show </label>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="promotersmanagement-search-div">
            <label htmlFor="search" id="promotersmanagement-search-id">Search : </label>
            <input type="text" id="search" onChange={searchhandle} placeholder="Search" autoComplete="off"/>
          </div>
        </div>
      <br />
      <div className="table-responsive third-head">
        <table className="table table-div">
          <thead>
            <tr>
              <th>promoters name</th>
              <th>Promocode</th>
              <th>Mobile</th>
              <th>Free Users</th>
              <th>Premium Users</th>
              <th>Silver Users</th>
              <th>Total Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>-</td>
                <td>{row.phone}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td className="action-button">
                  <button id="action-btn">DETAILS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="promotersmanagement-fourth-div">
        <div className="promotersmanagement-pagination">
          <div>
            <h5>
              Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
              {records.length} Entries
            </h5>
          </div>
          <div className="promotersmanagement-btn-div">
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

export default PromoterUsers;
