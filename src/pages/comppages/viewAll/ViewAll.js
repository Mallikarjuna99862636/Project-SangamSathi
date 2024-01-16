import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
} from "@mui/material";
import { Link } from "react-router-dom";
import userdps from "../../../assets/images/profile-pic.jpg";
import "./viewall.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import premiumimg from "../../../assets/images/premiumImg.jpg";
import CancelIcon from "@mui/icons-material/Cancel";
import AboutPop from "./popupContent/aboutPop/AboutPop";
import FamilyPop from "./popupContent/familyPop/FamilyPop";
import EducationPop from "./popupContent/educationPop/EducationPop";
import LifestylePop from "./popupContent/lifeStylePop/LifestylePop";
import PreferencePop from "./popupContent/preferencePop/PreferencePop";
import securePayment from '../../../assets/images/secure-payment.png' 
import Dashheader from "../../dashHeader/Dashheader";
import Sidebar from "../../sidebar/Sidebar";

const ViewAll = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userCard, setUserCard] = useState([]);
  const [selectedCardDetails, setSelectedCardDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [details, setDetails] = useState(0);

  const handleChange = (event, newValue) => {
    setDetails(newValue);
  };

  const handleCardClick = (index) => {
    const selectedCard = userCard[index];
    setSelectedCardDetails(selectedCard);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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

  const renderContent = () => {
    switch (details) {
      case 0:
        return <AboutPop />;
      case 1:
        return <FamilyPop />;
      case 2:
        return <EducationPop />;
      case 3:
        return <LifestylePop />;
      case 4:
        return <PreferencePop />;
      default:
        return null;
    }
  };
  return (
    <>
    <Dashheader/>
    <Sidebar/>
    <Box className="viewall-main-container">
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
                <img
                  src={premiumimg}
                  className="viewall-premium-img"
                  alt="premium-img"
                />
                <FavoriteIcon className="viewall-heart-icon" fontSize="small" />
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
          </Box>
        ))}
      </Box>

      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            position : 'fixed',
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow : 'none'
          },
        }}
      >
        <Box className="popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="user-name-age">
              <h3 className="user-name-details-heading">
                {" "}
                Akshatha N L , 27 Years (Last Seen: 3/27/23 12:31 PM){" "}
                {selectedCardDetails.id}
              </h3>
              <DialogActions>
                <CancelIcon
                  className="cancel-icon"
                  onClick={handleCloseDialog}
                />
              </DialogActions>
            </Box>
            <Box className="user-other-details">
              <Box>
                <img className="user-profile-pic" src={userdps} alt="user-dp" />
              </Box>
              <Box className="viewall-tabs-list">
                <Box>
                  <Tabs
                    className="viewall-tabs"
                    value={details}
                    onChange={handleChange}
                    centered
                  >
                    <Tab className="viewall-tab-names-list-01" label="About" />
                    <Tab className="viewall-tab-names-list-02" label="Family" />
                    <Tab
                      className="viewall-tab-names-list-03"
                      label="Education"
                    />
                    <Tab
                      className="viewall-tab-names-list-04"
                      label="LifeStyle"
                    />
                    <Tab
                      className="viewall-tab-names-list-05"
                      label="Preference"
                    />
                  </Tabs>
                  <Box className="viewall-tabs-content">{renderContent()}</Box>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Box className="viewall-main-container-card1">
                <Box className="viewall-container-card1">
                  <img className="security-icon-img" src={securePayment} alt="securePayment" />
                  <Box className="viewall-sub-container-card1">
                    <h4 className="viewall-trusted-heading-2"> Verified </h4>
                    <ul className="list-items">
                      <li>Email</li>
                      <li>Mobile</li>
                      <li>Image</li>
                    </ul>
                  </Box>
                </Box>
                <Box>
                  <button className="express-interest-button">
                    Express Interest
                  </button>
                </Box>
              </Box>
            </Box>
          </DialogContent>
        </Box>
      </Dialog>

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
    </>
  );
};

export default ViewAll;
