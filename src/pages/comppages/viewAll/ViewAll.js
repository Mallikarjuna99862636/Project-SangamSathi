import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import userdps from "../../../assets/images/profile-pic.jpg";
import "./viewall.scss";

const ViewAll = () => {
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
      `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserCard(data.slice(0, 20));
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
    <Box>
    <Box className="viewall-header-part">
        <h3 className="viewall-user-name">View All</h3>
        <Divider />
      </Box>
      <Box className="viewall-card-stack-div">
        {userCard.map((card, index) => (
          <Box
            key={index}
            className="viewall-div-card1"
            onClick={() => handleCardClick(index)}
          >
            <Box className="viewall-img-div">
              <Box className="viewall-sub-img-div">
                <figure>
                  <img
                    className="viewall-card-user-dp"
                    src={userdps}
                    alt="user-dp"
                  />
                </figure>
              </Box>
            </Box>
            <Box className="viewall-sub-div1-card1">
              <Link className="viewall-sub-div1-link">
                <h2 className="viewall-sub-div1-heading"> Naveen </h2>
              </Link>
              <p className="viewall-sub-div1-para"> Bengalore</p>
            </Box>
            <Box className="viewall-sub-div2-card1">
              <Box className="viewall-sub-div3-card1">
                <span className="viewall-sub-div3-age">{card.id}</span>
                <span className="viewall-sub-div3-text">Age</span>
              </Box>
              <Box className="viewall-sub-div4-card1">
                <span className="viewall-sub-div4-age">5.4</span>
                <span className="viewall-sub-div4-text">Height</span>
              </Box>
              <Box className="viewall-sub-div5-card1">
                <span className="viewall-sub-div5-age">SGM333</span>
                <span className="viewall-sub-div5-text">Reg No</span>
              </Box>
            </Box>
            {popupOpen && selectedCardIndex === index && (
              <div className="viewall-popup-content">
                <h2>{selectedCardDetails.name}</h2>
                <h2>{selectedCardDetails.id}</h2>
                <button onClick={closePopup}>Close</button>
              </div>
            )}
          </Box>
        ))}
      </Box>

      <div className="viewall-pagination-div">
        <button
          className="viewall-pagination-previous-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(50 / itemsPerPage) },
          (_, i) => i + 1
        ).map((page) => (
          <span
            key={page}
            className={`viewall-pagination-number-item ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <button
          className="viewall-pagination-next-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(50 / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </Box>
  );
};

export default ViewAll;
