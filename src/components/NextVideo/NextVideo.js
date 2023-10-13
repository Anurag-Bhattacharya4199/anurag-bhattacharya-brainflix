function NextVideo(props) {
  return (
    <article
      className="nextVideoContent"
      onClick={() => props.changeMainVideoData(props.videoId)}
    >
      <img src={props.image} alt="Video Image" />
      <div className="nextVideoContent__titleWrapper">
        <h1 className="nextVideoContent__title">{props.title}</h1>
        <p className="nextVideoContent__channel">{props.channel}</p>
      </div>
    </article>
  );
}

export default NextVideo;
