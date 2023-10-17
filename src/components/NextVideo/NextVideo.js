function NextVideo(props) {
  const { videoId, title, channel, changeMainVideoData, image } = props;

  return (
    <article
      className="nextVideoContent"
      onClick={() => changeMainVideoData(videoId)}
    >
      <img src={image} alt="Video Poster" />
      <div className="nextVideoContent__contentWrapper">
        <h1 className="nextVideoContent__title">{title}</h1>
        <p className="nextVideoContent__channel">{channel}</p>
      </div>
    </article>
  );
}

export default NextVideo;
