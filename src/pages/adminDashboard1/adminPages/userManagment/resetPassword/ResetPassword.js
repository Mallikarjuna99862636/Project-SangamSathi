import React, { useEffect, useState } from "react";
import "./resetpassword.scss";
import axios from "axios";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Pagination } from "@mui/material";

const ResetPassword = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showActive,setShowActive]=useState(false)
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
      <div className="reset-password-user">
        <div className="reset-password-fist-head">
          <h4>Reset Password</h4>
        </div>
        <br />
        <div className="reset-password-second-head">
          <div className="reset-password-rows-per-page">
            <label>Show </label>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="reset-password-search-div">
            <label htmlFor="search" id="reset-password-search-id">Search : </label>
            <input type="text" id="search" onChange={searchhandle} placeholder="Search" autoComplete="off"/>
          </div>
        </div>
        <br />
        <div className="table-responsive third-head">
          <table className="table table-div">
            <thead>
              <tr>
              <th>Registration No</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Password</th> 
                <th>Satus</th>
                <th>Change Password</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                  <td>SGM6314</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>Abcd#1234</td>
                  <td className="reset-password-status">{showActive? <span className="status-span"><p className="active-status"></p>Active</span>:<span className="status-span" ><p className="pending-status"></p>Pending</span>}</td>
                  <td className="reset-password-btn"><button><EditSharpIcon /> <br/>change password</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reset-password-fourth-div">
        <div className="reset-password-pagination">
          <div>
          <h5>
          Showing {indexOfFirstRow + 1} to {indexOfLastRow} of {records.length}  Entries
          </h5>
          </div>
          <div className="reset-password-btn-div">
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

export default ResetPassword;
