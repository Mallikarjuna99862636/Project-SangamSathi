import React, { useEffect, useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import icon1 from "../../../assets/images/wedding-arch.png";
import icon2 from "../../../assets/images/love-letter.png";
import icon3 from "../../../assets/images/chat.png";
import userdp from "../../../assets/images/profile-pic.jpg";
import silverimg from '../../../assets/images/silverImg.jpg';
import "./dashboardInitialpage.scss";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from '@mui/icons-material/Favorite';

const DashboardInitialPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [userCard, setUserCard] = useState([]);

  const handleCardClick = (index) => {
    const selectedCard = userCard[index];
    setSelectedCardDetails(selectedCard);
    setSelectedCardIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    // setPopupOpen(prevState => !prevState);
    setSelectedCardIndex(null);
    console.log("Close button clicked");
  };

  // useEffect(() => {
  //   console.log("isPopupOpen before update:", isPopupOpen);
  //   if (!isPopupOpen) {
  //     console.log("Closing popup...");
  //     closePopup();
  //   }
  //   console.log("isPopupOpen after update:", isPopupOpen);
  // }, [isPopupOpen]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUserCard(data);
        })
        .catch((error) => console.log(error));
    };

    getData();
  }, [setUserCard]);

  const renderCards = () => {
    const cardSets = [];
    const numberOfCardsPerSlide = 3;

    for (let i = 0; i < userCard.length; i += numberOfCardsPerSlide) {
      const cards = userCard.slice(i, i + numberOfCardsPerSlide);

      cardSets.push(
        <Stack key={i} className="sub-card-stack-div">
          {cards.map((card, index) => (
            <Box
              key={index}
              className="sub-div-card1"
              onClick={() => handleCardClick(i + index)}
            >
              <Box className="img-div">
                <Box className="sub-img-div">
                  <figure>
                    <img className="card-user-dp" src={userdp} alt="user-dp" />
                  </figure>
                </Box>
              </Box>
              <Box className="sub-div1-card1">
                <Link className="sub-div1-link">
                  <h2 className="sub-div1-heading"> {card.name}</h2>
                </Link>
                <p className="sub-div1-para"> {card.address.street}</p>
              </Box>
              <Box className="sub-div2-card1">
                <Box className="sub-div3-card1">
                  <span className="sub-div3-age">{card.id}</span>
                  <span className="sub-div3-text">Age</span>
                </Box>
                <Box className="sub-div4-card1">
                  <span className="sub-div4-age">5.4</span>
                  <span className="sub-div4-text">Height</span>
                </Box>
                <Box className="sub-div5-card1">
                  <span className="sub-div5-age">SGM333</span>
                  <span className="sub-div5-text">Reg No</span>
                </Box>
              </Box>
              {isPopupOpen && selectedCardIndex === i + index && (
                <div className="popup-content">
                  <h2>{selectedCardDetails.name}</h2>
                  <h2>{selectedCardDetails.id}</h2>
                  <button onClick={closePopup}>Close</button>
                </div>
              )}
            </Box>
          ))}
        </Stack>
      );
    }
    return cardSets;
  };

  return (
    <Box className="dash-main-container">
      <Box className="header-part">
        <h3 className="user-welcome-name"> Welcome Rama S</h3>
        <Divider />
        <Box className="small-box"></Box>
      </Box>
      <Box className="dash-sub-div-01">
        <Box className="dash-sub-div-02">
          <h1 className="dash-heading-01">
      
            Assistance service available @ 1599/-{" "}
          </h1>
          <h3 className="dash-heading-02">
          
            For Selected 10 Profiles (Validity - 60 days){" "}
          </h3>
          <button className="info-button">
            <h3 className="info-button-headig">FOR INFO : 9148824442</h3>
          </button>
        </Box>
      </Box>
      <Stack className="dash-stack-container">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"> 1 </h1>
              <p className="card1-heading-02"> Interested Profile </p>
            </Box>
            <Box>
              <img className="logo-one" src={icon1} alt="logo-one" />
            </Box>
          </Box>
          <Box className="view-all-link-01">
            <Link className="link-one">
  
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> 4 </h1>
              <p className="card2-heading-02"> Request Sent </p>
            </Box>
            <Box>
              <img className="logo-two" src={icon2} alt="logo-two" />
            </Box>
          </Box>
          <Box className="view-all-link-02">
            <Link className="link-two">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>

        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"> 599 </h1>
              <p className="card3-heading-02"> Recent Register </p>
            </Box>
            <Box>
              <img className="logo-three" src={icon3} alt="logo-three" />
            </Box>
          </Box>
          <Box className="view-all-link-03">
            <Link className="link-three">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>
      </Stack>

      <Box className="sub-div-one">
        <Box className="sub-div-two">
          <h2 className="sub-heading-one">Interested Profile</h2>
        </Box>
        <Stack className="sub-card-stack-div">
          <Box className="sub-div-card1">
            <Box className="img-div">
              <Box className="sub-img-div">
                <figure>
                  <img className="card-user-dp" src={userdp} alt="user-dp" />
                </figure>
                <img src={silverimg} className="silver-img" alt="silver-img" />
                <FavoriteIcon className="heart-icon" fontSize="small" />
              </Box>
            </Box>
            <Box className="sub-div1-card1">
              <Link className="sub-div1-link">
                <h2 className="sub-div1-heading"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card1">
              <Box className="sub-div3-card1">
                <span className="sub-div3-age">23</span>
                <span className="sub-div3-text">Age</span>
              </Box>
              <Box className="sub-div4-card1">
                <span className="sub-div4-age">5.4</span>
                <span className="sub-div4-text">Height</span>
              </Box>
              <Box className="sub-div5-card1">
                <span className="sub-div5-age">SGM333</span>
                <span className="sub-div5-text">Reg No</span>
              </Box>
            </Box>
          </Box>
          {/* Second Div   */}

          <Box className="sub-div-card2">
            <Box className="img-div-1">
              <Box className="sub-img-div-1">
                <figure>
                  <img className="card-user-dp-1" src={userdp} alt="user-dp" />
                </figure>
              </Box>
            </Box>
            <Box className="sub-div1-card2">
              <Link className="sub-div1-link-1">
                <h2 className="sub-div1-heading-1"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para-1"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card2">
              <Box className="sub-div3-card2">
                <span className="sub-div3-age-1">23</span>
                <span className="sub-div3-text-1">Age</span>
              </Box>
              <Box className="sub-div4-card2">
                <span className="sub-div4-age-1">5.4</span>
                <span className="sub-div4-text-1">Height</span>
              </Box>
              <Box className="sub-div5-card2">
                <span className="sub-div5-age-1">SGM333</span>
                <span className="sub-div5-text-1">Reg No</span>
              </Box>
            </Box>
          </Box>
          {/* Third Div Start here  */}
          <Box className="sub-div-card2">
            <Box className="img-div-1">
              <Box className="sub-img-div-1">
                <figure>
                  <img className="card-user-dp-1" src={userdp} alt="user-dp" />
                </figure>
              </Box>
            </Box>
            <Box className="sub-div1-card2">
              <Link className="sub-div1-link-1">
                <h2 className="sub-div1-heading-1"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para-1"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card2">
              <Box className="sub-div3-card2">
                <span className="sub-div3-age-1">23</span>
                <span className="sub-div3-text-1">Age</span>
              </Box>
              <Box className="sub-div4-card2">
                <span className="sub-div4-age-1">5.4</span>
                <span className="sub-div4-text-1">Height</span>
              </Box>
              <Box className="sub-div5-card2">
                <span className="sub-div5-age-1">SGM333</span>
                <span className="sub-div5-text-1">Reg No</span>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Second Recent Register div  */}

      <Box className="sub-div-one">
        <Box className="sub-div-two">
          <h2 className="sub-heading-one">Recent Register</h2>
        </Box>
        <Stack className="sub-card-stack-div">
          <Box className="sub-div-card1">
            <Box className="img-div">
              <Box className="sub-img-div">
                <figure>
                  {" "}
                  <img className="card-user-dp" src={userdp} alt="user-dp" />
                </figure>
              </Box>
            </Box>
            <Box className="sub-div1-card1">
              <Link className="sub-div1-link">
                <h2 className="sub-div1-heading"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card1">
              <Box className="sub-div3-card1">
                <span className="sub-div3-age">23</span>
                <span className="sub-div3-text">Age</span>
              </Box>
              <Box className="sub-div4-card1">
                <span className="sub-div4-age">5.4</span>
                <span className="sub-div4-text">Height</span>
              </Box>
              <Box className="sub-div5-card1">
                <span className="sub-div5-age">SGM333</span>
                <span className="sub-div5-text">Reg No</span>
              </Box>
            </Box>
          </Box>
          {/* Second Div   */}

          <Box className="sub-div-card2">
            <Box className="img-div-1">
              <Box className="sub-img-div-1">
                <figure>
                  <img className="card-user-dp-1" src={userdp} alt="user-dp" />
                </figure>
              </Box>
            </Box>
            <Box className="sub-div1-card2">
              <Link className="sub-div1-link-1">
                <h2 className="sub-div1-heading-1"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para-1"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card2">
              <Box className="sub-div3-card2">
                <span className="sub-div3-age-1">23</span>
                <span className="sub-div3-text-1">Age</span>
              </Box>
              <Box className="sub-div4-card2">
                <span className="sub-div4-age-1">5.4</span>
                <span className="sub-div4-text-1">Height</span>
              </Box>
              <Box className="sub-div5-card2">
                <span className="sub-div5-age-1">SGM333</span>
                <span className="sub-div5-text-1">Reg No</span>
              </Box>
            </Box>
          </Box>

          {/* Third Div Start here  */}

          <Box className="sub-div-card2">
            <Box className="img-div-1">
              <Box className="sub-img-div-1">
                <figure>
                  <img className="card-user-dp-1" src={userdp} alt="user-dp" />
                </figure>
              </Box>
            </Box>
            <Box className="sub-div1-card2">
              <Link className="sub-div1-link-1">
                <h2 className="sub-div1-heading-1"> Naveen Kumar</h2>
              </Link>
              <p className="sub-div1-para-1"> Diploma , Bengalore</p>
            </Box>
            <Box className="sub-div2-card2">
              <Box className="sub-div3-card2">
                <span className="sub-div3-age-1">23</span>
                <span className="sub-div3-text-1">Age</span>
              </Box>
              <Box className="sub-div4-card2">
                <span className="sub-div4-age-1">5.4</span>
                <span className="sub-div4-text-1">Height</span>
              </Box>
              <Box className="sub-div5-card2">
                <span className="sub-div5-age-1">SGM333</span>
                <span className="sub-div5-text-1">Reg No</span>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Third Request Sent   Div  */}

      <Box className="sub-div-one">
        <Box className="sub-div-two">
          <h2 className="sub-heading-one">Request Sent</h2>
        </Box>
        <Box>
          <Carousel
            className="image-slider"
            animation="slide"
            indicators={false}
            timeout={300}
            swipe={true}
          >
            {renderCards()}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardInitialPage;
