function NextVideo(props) {
  const { videoId, title, channel } = props;

  return (
    <article
      className="nextVideoContent"
      onClick={() => props.changeMainVideoData(videoId)}
    >
      <img src={props.image} alt="Video Poster" />
      <div className="nextVideoContent__titleWrapper">
        <h1 className="nextVideoContent__title">{title}</h1>
        <p className="nextVideoContent__channel">{channel}</p>
      </div>
    </article>
  );
}

export default NextVideo;
