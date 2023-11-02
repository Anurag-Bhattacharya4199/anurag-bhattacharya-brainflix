import { useNavigate } from "react-router-dom";
import UploadVideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadComponent.scss";

function UploadComponent() {
  const navigate = useNavigate();
  const handlePublish = () => {
    alert("Video Uploaded");
    navigate("/");
  };
  const handleCancel = () => {
    alert("Video Upload Cancelled");
    navigate("/");
  };
  return (
    <form className="uploadForm">
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

export default UploadComponent;
