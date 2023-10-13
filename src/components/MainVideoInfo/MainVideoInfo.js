import "./MainVideoInfo.scss";
import ViewsIcon from "../../assets/images/icons/views.svg";
import LikesIcon from "../../assets/images/icons/likes.svg";

function MainVideoInfo(props) {
  const { mainVideoData } = props;

  return (
    <section className="videoInfo">
      <h1 className="videoInfo__title">{mainVideoData.title}</h1>
      <article className="videoInfo__statistics">
        <div className="videoInfo__statistics-1">
          <p className="videoInfo__channel">By {mainVideoData.channel}</p>
          <p className="videoInfo__date">
            {new Date(mainVideoData.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="videoInfo__statistics-2">
          <div className="videoInfo__viewsWrapper">
            <img
              src={ViewsIcon}
              alt="Views Icon"
              className="videoInfo__viewsIcon"
            />
            <span className="videoInfo__views">{mainVideoData.views}</span>
          </div>
          <div className="videoInfo__likesWrapper">
            <img
              src={LikesIcon}
              alt="Likes Icon"
              className="videoInfo__likesIcon"
            />
            <span className="videoInfo__likes">{mainVideoData.likes}</span>
          </div>
        </div>
      </article>
      <article className="videoInfo__description">
        <div className="videoInfo__description-content">
          {mainVideoData.description}
        </div>
      </article>
      <div className="videoInfo__numberComments">
        {mainVideoData.comments.length} Comments
      </div>
    </section>
  );
}

export default MainVideoInfo;
