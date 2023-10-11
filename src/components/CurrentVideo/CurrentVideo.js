import "./CurrentVideo.scss";

function CurrentVideo(props) {
  return (
    <div className="currentVideoContainer">
      <video
        className="currentVideoContainer__video"
        poster={props.currentVideo.image}
        controls
      ></video>
    </div>
  );
}

export default CurrentVideo;
