import React, { useEffect, useState } from "react";
import "./promoterearing.scss";
import axios from "axios";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";

const PromotersEarning = () => {
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
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className="promotersmanagement-user">
      <div className="promotersmanagement-fist-head">
        <h4>Promoters Earning</h4>
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
          <label htmlFor="search" id="promotersmanagement-search-id">
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
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>-</td>
                <td>Rs. {row?.address?.zipcode}</td>
                <td>Rs. {row?.address?.zipcode}</td>
                <td>Rs. {row?.address?.zipcode}</td>
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
            <button onClick={handlehandle} disabled={currentPage === 1}>
              Prev
            </button>
            ...
            <button onClick={handlenext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PromotersEarning;
