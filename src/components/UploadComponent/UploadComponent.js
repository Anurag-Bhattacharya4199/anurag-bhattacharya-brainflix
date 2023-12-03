/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the UploadComponent.js
In this file, Form validation occurs and UploadComponent is used
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

/*
Importing all the files needed for this file
 */
//Importing useNavigate from react-router-dom package
import { useNavigate } from "react-router-dom";
//Importing the Upload SVG from assets folder
import UploadVideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
//Importing the stylesheet of this file
import "./UploadComponent.scss";

//Import axios package
import axios from "axios";
//import searchVideosAll function and postHeader variable from utils folder
import { searchVideosAll, postHeader } from "../../utils/utils";
//Import useState package
import { useState } from "react";

/**
 * This function returns the container of the Upload Page Content
 * @returns the container of the Upload Page Content
 */
function UploadComponent() {
  //States for title and desc (description)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //States for error for inputs
  const [error, setError] = useState({
    titleError: false,
    descError: false,
  });

  //Using Navigate to navigate to another component
  const navigate = useNavigate();

  //POST request to server to add a new video
  const postVideo = async (title, description) => {
    const newVideo = {
      title,
      description,
    };
    try {
      axios.post(searchVideosAll, newVideo, postHeader);
    } catch (e) {
      console.log(e);
    }
  };

  //Sets the title state whenever user changes the title input value
  const handleChangeTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  //Sets the desc state whenever user changes the description input value
  const handleChangeDesc = (event) => {
    const desc = event.target.value;
    setDesc(desc);
  };

  //Checks if the full form is valid
  const isFormValid = () => {
    //intializes a variable to hold whether the form is complete, intialized to true
    let formComplete = true;
    //Local error states for the inputs
    let errorState = {
      titleError: false,
      descError: false,
    };
    //If the title is unfilled, error state for title becomes true and formComplete becomes false
    if (title.length === 0) {
      errorState.titleError = true;
      formComplete = false;
    }
    //If the description is unfilled, error state for description becomes true and formComplete becomes false
    if (desc.length === 0) {
      errorState.descError = true;
      formComplete = false;
    }

    //Sets the error states to the local error state object
    setError(errorState);
    //returns the value of formComplete
    return formComplete;
  };

  //Handles the form submission
  const handleSubmit = (event) => {
    //Prevents from form submission refreshing the page
    event.preventDefault();

    //if Form is valid, first the form is reset, post video function is called, and navigates to the Home Page
    if (isFormValid()) {
      setTitle("");
      setDesc("");
      postVideo(title, desc);
      navigate("/");
      //There is errors, error input will be highlighted
    } else {
      return;
    }
  };

  //Handles when a user clicks on the Cancel button
  const handleCancel = () => {
    alert("Video Upload Cancelled");
    navigate("/");
  };

  //Returns the container of the Upload Page Content
  return (
    <form className="uploadForm" onSubmit={handleSubmit}>
      <div className="uploadForm__topContent">
        <div className="uploadForm__leftContent">
          <h2 className="uploadForm__title">VIDEO THUMBNAIL</h2>
          <img
            src={UploadVideoThumbnail}
            alt="Upload Video Thumbnail"
            className="uploadForm__image"
          />
        </div>
        <div className="uploadForm__rightContent">
          <label className="uploadForm__videoTitle">TITLE YOUR VIDEO</label>
          {/*Checks if title input has any error, will show default styling or
          error styling depending on this*/}
          <input
            className={`uploadForm__videoTitleInp ${
              error.titleError ? "uploadForm__invalidInput" : ""
            }`}
            name="title"
            for="title"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Add a title to your video"
          />
          <label className="uploadForm__descTitle">
            ADD A VIDEO DESCRIPTION
          </label>
          {/*Checks if description input has any error, will show default styling or
          error styling depending on this*/}
          <input
            className={`uploadForm__descInp ${
              error.descError ? "uploadForm__invalidInput" : ""
            }`}
            name="desc"
            for="desc"
            value={desc}
            onChange={handleChangeDesc}
            placeholder="Add a description to your video"
          />
        </div>
      </div>
      <div className="uploadForm__buttons">
        <button className="uploadForm__publish">PUBLISH</button>
        <button className="uploadForm__cancel" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </form>
  );
}

//Exporting the function
export default UploadComponent;
