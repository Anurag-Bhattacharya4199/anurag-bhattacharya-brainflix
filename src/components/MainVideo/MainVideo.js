import "./MainVideo.scss";

function MainVideo(props) {
  const { image, video } = props.mainVideoData;

  return (
    <section className="mainVideo">
      <video
        poster={image}
        className="mainVideo__video"
        controls
        src={video}
      ></video>
    </section>
  );
}

export default MainVideo;
