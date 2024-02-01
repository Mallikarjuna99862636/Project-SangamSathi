import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import userdp from "../../../../../../assets/images/profile-pic.jpg";
import "./onprocess.scss";

const OnProcess = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [userCard, setUserCard] = useState([]);
  const [onprocessCardDetails, setonprocessCardDetails] = useState({});
  const [onprocessCardIndex, setonprocessCardIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleCardClick = (index) => {
    const onprocessCard = userCard[index];
    setonprocessCardDetails(onprocessCard);
    setonprocessCardIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setonprocessCardIndex(null);
    console.log("Close button clicked");
  };

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
      <Box className="onprocess-card-stack-div">
        {userCard.map((card, index) => (
          <Box
            key={index}
            className="onprocess-div-card1"
            onClick={() => handleCardClick(index)}
          >
            <Box className="onprocess-img-div">
              <Box className="onprocess-sub-img-div">
                <figure>
                  <img
                    className="onprocess-card-user-dp"
                    src={userdp}
                    alt="user-dp"
                  />
                </figure>
              </Box>
            </Box>
            <Box className="onprocess-sub-div1-card1">
              <Link className="onprocess-sub-div1-link">
                <h2 className="onprocess-sub-div1-heading"> Naveen </h2>
              </Link>
              <p className="onprocess-sub-div1-para"> Bengalore</p>
            </Box>
            <Box className="onprocess-sub-div2-card1">
              <Box className="onprocess-sub-div3-card1">
                <span className="onprocess-sub-div3-age">{card.id}</span>
                <span className="onprocess-sub-div3-text">Age</span>
              </Box>
              <Box className="onprocess-sub-div4-card1">
                <span className="onprocess-sub-div4-age">5.4</span>
                <span className="onprocess-sub-div4-text">Height</span>
              </Box>
              <Box className="onprocess-sub-div5-card1">
                <span className="onprocess-sub-div5-age">SGM333</span>
                <span className="onprocess-sub-div5-text">Reg No</span>
              </Box>
            </Box>
            {popupOpen && onprocessCardIndex === index && (
              <div className="onprocess-popup-content">
                <h2>{onprocessCardDetails.name}</h2>
                <h2>{onprocessCardDetails.id}</h2>
                <button onClick={closePopup}>Close</button>
              </div>
            )}
          </Box>
        ))}
      </Box>

      <div className="onprocess-pagination-div">
        <button
          className="onprocess-pagination-previous-button"
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
            className={`onprocess-pagination-number-item ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <button
          className="onprocess-pagination-next-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(50 / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default OnProcess;
