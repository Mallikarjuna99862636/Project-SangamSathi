import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import userdp from "../../../../../../assets/images/profile-pic.jpg";
import "./mymatch.scss";

const MyMatch = () => {
  const [userCard, setUserCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

 

  

  const getData = (page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserCard(data.slice(0,2));
      })
      .catch((error) => console.log(error));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData(page);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <>
      <Box className="mymatch-card-stack-div">
        {userCard.map((card, index) => (
          <Box
            key={index}
            className="mymatch-div-card1"
          >
            <Box className="mymatch-img-div">
              <Box className="mymatch-sub-img-div">
                <figure>
                  <img
                    className="mymatch-card-user-dp"
                    src={userdp}
                    alt="user-dp"
                  />
                </figure>
              </Box>
            </Box>
            <Box className="mymatch-sub-div1-card1">
              <Link className="mymatch-sub-div1-link">
                <h2 className="mymatch-sub-div1-heading"> Naveen </h2>
              </Link>
              <p className="mymatch-sub-div1-para"> Bengalore</p>
            </Box>
            <Box className="mymatch-sub-div2-card1">
              <Box className="mymatch-sub-div3-card1">
                <span className="mymatch-sub-div3-age">{card.id}</span>
                <span className="mymatch-sub-div3-text">Age</span>
              </Box>
              <Box className="mymatch-sub-div4-card1">
                <span className="mymatch-sub-div4-age">5.4</span>
                <span className="mymatch-sub-div4-text">Height</span>
              </Box>
              <Box className="mymatch-sub-div5-card1">
                <span className="mymatch-sub-div5-age">SGM333</span>
                <span className="mymatch-sub-div5-text">Reg No</span>
              </Box>
            </Box>
      
          </Box>
        ))}
      </Box>

      <div className="mymatch-pagination-div">
        <button
          className="mymatch-pagination-previous-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(10 / itemsPerPage) },
          (_, i) => i + 1
        ).map((page) => (
          <span
            key={page}
            className={`mymatch-pagination-number-item ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <button
          className="mymatch-pagination-next-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(50 / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MyMatch;
