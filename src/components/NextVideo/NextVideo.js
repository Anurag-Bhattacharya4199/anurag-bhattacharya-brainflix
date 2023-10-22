import "./NextVideo.scss";

function NextVideo({ videoId, title, channel, changeMainVideoData, image }) {
  return (
    <section
      className="videoContent"
      onClick={() => changeMainVideoData(videoId)}
    >
      <article className="videoContent__videoWrapper">
        <img
          src={image}
          alt="Video Poster"
          className="videoContent__videoWrapper-video"
        />
      </article>

      <article className="videoContent__content">
        <h1 className="videoContent__content-title">{title}</h1>
        <p className="videoContent__content-channel">{channel}</p>
      </article>
    </section>
  );
}

export default NextVideo;
