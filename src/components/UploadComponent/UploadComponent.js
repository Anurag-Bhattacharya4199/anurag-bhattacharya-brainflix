/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the UploadComponent.js File
In this file, the container of the UploadPage Content is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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

import axios from "axios";

import { searchVideosAll, postHeader } from "../../utils/utils";
import { useState } from "react";

/**
 * This function returns the container of the Upload Page Content
 * @returns the container of the Upload Page Content
 */
function UploadComponent() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //Using Navigate
  const navigate = useNavigate();

  const postVideo = async (title, description) => {
    const newVideo = {
      title,
      description,
    };
    axios.post(searchVideosAll, newVideo, postHeader);
  };

  const handleChangeTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleChangeDesc = (event) => {
    const desc = event.target.value;
    setDesc(desc);
  };

  const isVideoTitleValid = () => {
    if (title === "") {
      return false;
    }
    return true;
  };

  const isVideoDescValid = () => {
    if (desc === "") {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (!title || !desc) {
      return false;
    }

    if (!isVideoTitleValid()) {
      return false;
    }

    if (!isVideoDescValid()) {
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      postVideo(title, desc);
      alert("Video Uploaded");
      navigate("/");
    } else {
      alert(
        "Video Upload Unsuccessful, You have errors in your form! Please Fix!"
      );
    }
  };

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
          <input
            className={`uploadForm__videoTitleInp ${
              isVideoTitleValid() ? "" : "uploadForm__invalidInput"
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
          <input
            className={`uploadForm__descInp ${
              isVideoDescValid() ? "" : "uploadForm__invalidInput"
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
