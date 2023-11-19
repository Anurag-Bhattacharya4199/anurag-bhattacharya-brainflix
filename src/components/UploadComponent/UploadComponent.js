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

import { useRef } from "react";

import axios from "axios";

import { searchVideosAll, postHeader } from "../../utils/utils";

/**
 * This function returns the container of the Upload Page Content
 * @returns the container of the Upload Page Content
 */
function UploadComponent() {
  //Using Navigate
  const navigate = useNavigate();

  const uploadFormRef = useRef();

  const postVideo = async (title, description) => {
    const newVideo = {
      title,
      description,
    };
    axios.post(searchVideosAll, newVideo, postHeader);
  };
  //Handling the Publish and Cancel Buttons on submit
  const handlePublish = (event) => {
    event.preventDefault();

    const uploadForm = uploadFormRef.current;
    const title = uploadForm.title.value;
    const description = uploadForm.desc.value;
    const titleInput = uploadForm.title;
    const descInput = uploadForm.desc;

    if (title === "" || description === "") {
      alert("Please fill all values");
      return;
      //Will figure out the error styling
    }

    postVideo(title, description);
    uploadForm.reset();
    alert("Video Uploaded");

    navigate("/");
  };
  const handleCancel = () => {
    alert("Video Upload Cancelled");
    navigate("/");
  };
  //Returns the container of the Upload Page Content
  return (
    <form className="uploadForm" ref={uploadFormRef}>
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
            className="uploadForm__videoTitleInp"
            name="title"
            for="title"
            placeholder="Add a title to your video"
          />
          <label className="uploadForm__descTitle">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="uploadForm__descInp"
            name="desc"
            for="desc"
            placeholder="Add a description to your video"
          />
        </div>
      </div>
      <div className="uploadForm__buttons">
        <button className="uploadForm__publish" onClick={handlePublish}>
          PUBLISH
        </button>
        <button className="uploadForm__cancel" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </form>
  );
}

//Exporting the function
export default UploadComponent;
