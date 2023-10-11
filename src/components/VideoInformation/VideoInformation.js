import "./VideoInformation.scss";
import ViewIcon from "../../assets/images/icons/views.svg";
import LikesIcon from "../../assets/images/icons/likes.svg";

function VideoInformation(props) {
  return (
    <div className="videoInformationContentWrapper">
      <div className="videoInformationContentWrapper__content">
        <h1 className="videoInformationContentWrapper__title">
          {props.currentVideo.title}
        </h1>
        <div className="videoInformationContentWrapper__videoStats">
          <div className="videoInformationContentWrapper__videoDetails">
            <p className="videoInformationContentWrapper__channel">
              By {props.currentVideo.channel}
            </p>
            <p className="videoInformationContentWrapper__date">
              {new Date(props.currentVideo.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="videoInformationContentWrapper__statistics">
            <p className="videoInformationContentWrapper__views">
              <img
                className="videoInformationContentWrapper__viewsIcon"
                src={ViewIcon}
                alt="Views Icon"
              ></img>
              {props.currentVideo.views}
            </p>
            <p className="videoInformationContentWrapper__likes">
              <img
                className="videoInformationContentWrapper__likesIcon"
                src={LikesIcon}
                alt="Likes Icon"
              ></img>
              {props.currentVideo.likes}
            </p>
          </div>
        </div>
        <div className="videoInformationContentWrapper__videoDescription">
          <p className="videoInformationContentWrapper__videoDescriptionContent">
            {props.currentVideo.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoInformation;
