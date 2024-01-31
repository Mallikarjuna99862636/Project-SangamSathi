import React, { useEffect, useState } from "react";
import "./tempusers.scss";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";

const TempUsers = () => {
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
      <AdminHeader />
      <AdminSidebar />
      <div className="temp-user">
        <div className="temp-user-fist-head">
          <div>
            <h4>Temp Users</h4>
          </div>
          <div>
            <button className="temp-user-validate-button"> Validate</button>
          </div>
        </div>
        <br />
        <div className="temp-user-second-head">
          <div className="temp-user-rows-per-page">
            <label>Show </label>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="temp-user-search-div">
            <label htmlFor="search" id="temp-user-search-id">
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
          <table className="table table-div">
            <thead>
              <tr>
                <th>Registration Date</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile No</th>
                <th>Email ID</th>
                <th>UserType</th>
                <th>Referred By</th>
                <th>Caste</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                  <td>20-02-2002</td>
                  <td>{row.name}</td>
                  <td>M/F</td>
                  <td>{row?.address?.zipcode}</td>
                  <td>{row.email}</td>
                  <td>SilverUser</td>
                  <td>none</td>
                  <td>Brahmin</td>
                  <td className="temp-user-status-btn">
                    <button className="btn">
                      <CheckIcon className="money-icon" />
                      <br />
                      ADD
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="temp-user-fourth-div">
          <div className="temp-user-pagination">
            <div>
              <h5>
                Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
                {records.length} Entries
              </h5>
            </div>
            <div className="temp-user-btn-div">
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

export default TempUsers;
