import React, { useEffect, useState } from "react";
import "./paytopromoters.scss";
import axios from "axios";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from "@mui/material";

const PayToPromoters = () => {
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
    <div className="paytopromoter-user">
      <div className="paytopromoter-fist-head">
        <h4>Pay To Promoters</h4>
      </div>
      <br />
      <div className="paytopromoter-second-head">
        <div className="paytopromoter-rows-per-page">
          <label>Show </label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <label>Entries</label>
        </div>

        <div className="paytopromoter-search-div">
          <label htmlFor="search" id="paytopromoter-search-id">
            Search :
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
              <th>Promoter Name</th>
              <th>Promoter Code</th>
              <th>Total Earnings</th>
              <th>Paid</th>
              <th>Payable</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>-</td>
                <td>Rs.{row?.address?.zipcode} </td>
                <td>Rs. {row?.address?.zipcode}</td>
                <td>Rs. {row?.address?.zipcode}</td>
                <td className="paynow-div">
                  <button>Pay Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paytopromoter-fourth-div">
        <div className="paytopromoter-pagination">
          <div>
            <h5>
              Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
              {records.length} Entries
            </h5>
          </div>
          <div className="paytopromoter-btn-div">
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

export default PayToPromoters;
