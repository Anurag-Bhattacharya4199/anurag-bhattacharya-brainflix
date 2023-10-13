import "./MainVideo.scss";

function MainVideo(props) {
  const { mainVideoData } = props;
  return (
    <section className="mainVideo">
      <video
        poster={mainVideoData.image}
        className="mainVideo__video"
        controls
        src={mainVideoData.video}
      ></video>
    </section>
  );
}

export default MainVideo;
