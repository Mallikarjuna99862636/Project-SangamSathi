import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import userdp from "../../../../../assets/images/profile-pic.jpg";
import "./suggestions.scss";

const Suggestions = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [userCard, setUserCard] = useState([]);
  const [selectedCardDetails, setSelectedCardDetails] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleCardClick = (index) => {
    const selectedCard = userCard[index];
    setSelectedCardDetails(selectedCard);
    setSelectedCardIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCardIndex(null);
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
      <Box className="suggestions-card-stack-div">
        {userCard.map((card, index) => (
          <Box
            key={index}
            className="suggestions-div-card1"
            onClick={() => handleCardClick(index)}
          >
            <Box className="suggestions-img-div">
              <Box className="suggestions-sub-img-div">
                <figure>
                  <img
                    className="suggestions-card-user-dp"
                    src={userdp}
                    alt="user-dp"
                  />
                </figure>
              </Box>
            </Box>
            <Box className="suggestions-sub-div1-card1">
              <Link className="suggestions-sub-div1-link">
                <h2 className="suggestions-sub-div1-heading"> Naveen </h2>
              </Link>
              <p className="suggestions-sub-div1-para"> Bengalore</p>
            </Box>
            <Box className="suggestions-sub-div2-card1">
              <Box className="suggestions-sub-div3-card1">
                <span className="suggestions-sub-div3-age">{card.id}</span>
                <span className="suggestions-sub-div3-text">Age</span>
              </Box>
              <Box className="suggestions-sub-div4-card1">
                <span className="suggestions-sub-div4-age">5.4</span>
                <span className="suggestions-sub-div4-text">Height</span>
              </Box>
              <Box className="suggestions-sub-div5-card1">
                <span className="suggestions-sub-div5-age">SGM333</span>
                <span className="suggestions-sub-div5-text">Reg No</span>
              </Box>
            </Box>
            {popupOpen && selectedCardIndex === index && (
              <div className="suggestions-popup-content">
                <h2>{selectedCardDetails.name}</h2>
                <h2>{selectedCardDetails.id}</h2>
                <button onClick={closePopup}>Close</button>
              </div>
            )}
          </Box>
        ))}
      </Box>

      <div className="suggestions-pagination-div">
        <button
          className="suggestions-pagination-previous-button"
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
            className={`suggestions-pagination-number-item ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <button
          className="suggestions-pagination-next-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(50 / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Suggestions;
