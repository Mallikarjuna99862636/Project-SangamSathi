import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Stack,
  Badge,
} from "@mui/material";
 import "./resentregister.scss"
import Carousel from "react-material-ui-carousel";
import { useDispatch } from "react-redux";
import { dataDetailsRequest } from "../../../../Redux/reduxData/DataRedux";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DraftsIcon from "@mui/icons-material/Drafts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import sangamLogo from '../../../../assets/images/SS_tagline.png'


const ResentRegisterpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataDetailsRequest());
  }, [dispatch]);

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setCardData(data);
        })
        .catch((error) => console.log(error));
    };

    getData();
  }, [setCardData]);

  const renderCards = () => {
    const cardSets = [];
    const numberOfCardsPerSlide = 3;

    for (let i = 0; i < cardData.length; i += numberOfCardsPerSlide) {
      const cards = cardData.slice(i, i + numberOfCardsPerSlide);

      cardSets.push(
        <Box key={i}  className="resent-card-details-div" >
          {cards.map((card, index) => (
            <Card key={index} className="resent-card-details-sub-div" >
              <CardActionArea>
                <img className="sangam-logo" src={sangamLogo} alt="Sangam-logo" />
                {/* <h4 className="regno-heading">REGNO:- &nbsp; SGM6316</h4> */}
                <CardContent sx={{padding : '5px' }}>
                <h4 className="regno-heading">REGNO:- &nbsp; SGM6316</h4>
                  <Box className="table-div">
                 
                     <table className="table">
                        <tbody>
                          <tr>
                            <th>Name:-</th>
                            <td> Naveen</td>
                          </tr>
                          <tr>
                            <th>Age:-</th>
                            <td> 26</td>
                          </tr>
                          <tr>
                            <th>Caste:-</th>
                            <td> God</td>
                          </tr>
                          <tr>
                            <th>Education:-</th>
                            <td> Diploma</td>
                          </tr>
                          <tr>
                            <th>Occupation:-</th>
                            <td>Mechanical Engg</td>
                          </tr>
                          <tr>
                            <th>City:-</th>
                            <td> Bengalore</td>
                          </tr>
                        </tbody>
                     </table>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      );
    }
    return cardSets;
  };

  return (
    <Box className="Resent-Register-Container">
      <h4 className="resent-heading-1">
        {" "}
        RECENT REGISTERS{" "}
      </h4>
       <Carousel
        className="image-slider"
         animation="slide"
         indicators={false}
         timeout={300}
        swipe={true}
      >
        {renderCards()}
      </Carousel> 
      <Box className="resent-div-container-1">
        <Box>
          <Typography variant="h4" component="div" className="custom-heading">
            How it Works?
          </Typography>
          <Typography variant="p" component="div" className="custom-subheading">
            Register and Find your Special Someone Matches Within Your
            Community.
          </Typography>
        </Box>
        <Stack
          direction="row"
         sx={{ padding: '50px 100px' ,  justifyContent: "space-between " }}
        >
          <Box >
            <Badge
              badgeContent={1}
              color="primary"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <CalendarMonthIcon
                className="icon1"
                style={{ fontSize: "40px" }}
              />
            </Badge>
            <h1 className="sign-up-heading" >
              Sign up
            </h1>
            <p className="resent-page-heading-1" >
              Register & put up your Profile.
            </p>
          </Box>
          <Box>
            <Badge
              badgeContent={2}
              color="primary"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <DraftsIcon className="icon2" style={{ fontSize: "40px" }} />
            </Badge>
            <h1 className="resent-page-heading-2" >
              Connect
            </h1>
            <p className="resent-page-heading-3" >
              Select & Connect with Matches you like.
            </p>
          </Box>
          <Box>
            <Badge
              badgeContent={3}
              color="primary"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <FamilyRestroomIcon
                className="icon3"
                style={{ fontSize: "40px" }}
              />
            </Badge>
            <h1 className="resent-page-heading-4" >
              Interact
            </h1>
            <p className="resent-page-heading-5" >
              Become a Premium Member & Start a Conversation.
            </p>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResentRegisterpage;
