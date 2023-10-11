import "./MainContent.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInformation from "../VideoInformation/VideoInformation";
import NextVideos from "../NextVideos/NextVideos";
import Comments from "../Comments/Comments";
import CommentsForm from "../CommentsForm/CommentsForm";

function MainContent(props) {
  return (
    <>
      <CurrentVideo currentVideo={props.currentVideo} />
      <div className="mainContentWrapper">
        <div className="mainVideoContent">
          <VideoInformation currentVideo={props.currentVideo} />
          <CommentsForm
            Videos={props.Videos}
            currentVideo={props.currentVideo}
          />
          <Comments Videos={props.Videos} currentVideo={props.currentVideo} />
        </div>
        <div className="nextVideosContainer">
          <NextVideos
            Videos={props.Videos}
            currentVideo={props.currentVideo}
            changeVideoSelection={props.changeVideoSelection}
          />
        </div>
      </div>
    </>
  );
}

export default MainContent;
