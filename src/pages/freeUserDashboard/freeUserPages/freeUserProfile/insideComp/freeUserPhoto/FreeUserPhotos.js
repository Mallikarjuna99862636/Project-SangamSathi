import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import "./freeuserphotos.scss";
import userprofile from "../../../../../../assets/images/profile-pic.jpg";
import uploadpic from "../../../../../../assets/images/uploadimg.png";

const FreeUserPhotos = () => {
  const [file, setFile] = useState("");
  const fileInputRef = useRef(null);

  const chooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type.startsWith("image/") &&
        selectedFile.size <= 2 * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        setFile("");
        alert("Please select a valid image file (max size: 2 MB).");
      }
    }
  };

  return (
    <Box className="photo-main-container">
      <Box className="photo-grid-cotainer">
        <Box className="profile-pic-div">
          <img
            className="profile-pic-div-img"
            src={userprofile}
            alt="user-profile"
          />
        </Box>
        <Box className="profile-upload-div">
          <img
            className="profile-upload-div-img"
            src={uploadpic}
            alt="upload-pic"
          />
          <Box className="sub-div-photo">
            <Box>
              <input
                className="fakeUploadLogo"
                placeholder="Choose File"
                disabled="disabled"
              />
              <p className="fakeUploadLogo-paga">
                * Please Upload High Resolution Images Only
              </p>
            </Box>
            <Box>
              <input
                type="file"
                onChange={handleFileChange}
                value={file}
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
              />
              <button className="choose-file-button" onClick={chooseFile}>
                Choose File
              </button>
            </Box>
          </Box>
          <button className="save-button"> Save </button>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeUserPhotos;
