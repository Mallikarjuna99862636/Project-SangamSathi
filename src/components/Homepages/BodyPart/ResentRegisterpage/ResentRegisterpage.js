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
 import "./ResentRegister.scss"
import Carousel from "react-material-ui-carousel";
import { useDispatch } from "react-redux";
import { dataDetailsRequest } from "../../../../Redux/reduxData/DataRedux";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DraftsIcon from "@mui/icons-material/Drafts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";


const ResentRegisterpage = () => {
  const dispatch = useDispatch();
  // const datas = useSelector((state) => state?.dataValue.data);
  // console.log(datas, "datas");

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
        <Box key={i}  sx={{ display: "flex", justifyContent: "space-around" }}>
          {cards.map((card, index) => (
            <Card key={index} sx={{ maxWidth: 345, margin: "30px auto" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.name}
                />
                <CardContent>
                  <Box>
                    <Typography>REGNO :- {card.address?.zipcode}</Typography>
                  </Box>
                  <Box>
                    <Typography>Name :- {card.name}</Typography>
                    <Typography>Age :- {card.id}</Typography>
                    <Typography>Caste :- {card.username}</Typography>
                    <Typography>Education :- {card.name}</Typography>
                    <Typography>Occupation:- {card.address?.street}</Typography>
                    <Typography>City:- {card.address?.street}</Typography>
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
