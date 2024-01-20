import { Box, Stack } from "@mui/material";
import React, {  useState } from "react";
import './bodypart.scss'
import AssignmentIcon from "@mui/icons-material/Assignment";
import ResentRegisterpage from "./resentRegisterpage/ResentRegisterpage";
import Footer from "../footerPart/Footer";
import { useNavigate , Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../Redux/reduxData/DataRedux";
const Body = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(userLogin({
      email : email,
      password:password,
      loggedIn : true
    }))
   }
   console.log(handleSubmit)

  

  const handleRegistar = () => {
    navigate("/registration");
  };
 
  
   const handleDashboard=()=>{
      if(email==="malli@gmail.com" && password==="1234"){
           navigate("/user/dashboard");
      }
   }

  return (
    <Box className="body-main-container">
      <h1 className="body-heading1">Superior Matrimony Service</h1>
      <h2 className="body-heading2">Only For Brahmin Community</h2>
      <h2 className="body-heading3">
        Register and Search by City, Profession & Community Profiles
      </h2>

      <form onSubmit={handleDashboard}>
        <Stack direction="row" spacing={2} className="body-stack-1">
          <input
            type="mail"
            id="text-field-1"
            className="name-field"
            autoComplete="on"
            placeholder=" Enter User Name"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            id="text-field-1"
            className="password-field"
            autoComplete="on"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="submit" className="Submit-Button">
            {" "}
            Login{" "}
          </button>
        </Stack>
      </form>

      <Link to="/forgotpassword" className="forgot-link">
        {" "}
        Forgot Password ?
      </Link>
      <Stack className="body-stack-2" direction="row" spacing={8}>
        <Box className="body-part-div-1">
          <Box className="body-div-1"  >
            <AssignmentIcon className="logo-tag-1" />
          </Box>
          <Box className="body-part-div-2">
            <p className="body-heading-1"> 2067+ </p>
            <p className="body-heading-2"> Profiles </p>
          </Box>
        </Box>
        <Box className="body-part-div-3">
          <Box className="body-part-div-4">
            <AssignmentIcon className="logo-tag-2" />
          </Box>
          <Box className="body-part-div-4">
            <p className="body-heading-3"> 37+ </p>
            <p className="body-heading-4"> This Week Registration </p>
          </Box>
        </Box>
        <Box className="body-part-div-5">
          <Box className="body-part-div-6">
            <AssignmentIcon className="logo-tag-3" />
          </Box>
          <Box
            className="body-part-div-7"
          >
            <p className="body-heading-5">3+ </p>
            <p className="body-heading-6"> This Month Registration </p>
          </Box>
        </Box>
      </Stack>
      <ResentRegisterpage />
      <Box className="body-part-div-8">
        <h1 className="body-heading-7">
          Register and Update Your Profile Right Now!
        </h1>
        <button
          className="register-button"
          variant="contained"
          onClick={handleRegistar}
        >
          REGISTER NOW
        </button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Body;
