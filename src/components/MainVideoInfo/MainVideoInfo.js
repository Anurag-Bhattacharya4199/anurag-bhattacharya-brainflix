import "./MainVideoInfo.scss";
import ViewsIcon from "../../assets/images/icons/views.svg";
import LikesIcon from "../../assets/images/icons/likes.svg";

function convertTime(time) {
  let unixTimeStamp = time;
  let date = new Date(unixTimeStamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  let dateString = `${month}/${day}/${year}`;
  return dateString;
}
function MainVideoInfo(props) {
  const { mainVideoData } = props;
  const { timestamp, views, likes, description, comments } = mainVideoData;

  return (
    <section className="videoInfo">
      <h1 className="videoInfo__title">{mainVideoData.title}</h1>
      <article className="videoInfo__statistics">
        <div className="videoInfo__statistics-1">
          <p className="videoInfo__channel">By {mainVideoData.channel}</p>
          <p className="videoInfo__date">{convertTime(timestamp)}</p>
        </div>
        <div className="videoInfo__statistics-2">
          <div className="videoInfo__viewsWrapper">
            <img
              src={ViewsIcon}
              alt="Views Icon"
              className="videoInfo__viewsIcon"
            />
            <span className="videoInfo__views">{views}</span>
          </div>
          <div className="videoInfo__likesWrapper">
            <img
              src={LikesIcon}
              alt="Likes Icon"
              className="videoInfo__likesIcon"
            />
            <span className="videoInfo__likes">{likes}</span>
          </div>
        </div>
      </article>
      <article className="videoInfo__description">
        <div className="videoInfo__description-content">{description}</div>
      </article>
      <div className="videoInfo__numberComments">
        {comments.length} Comments
      </div>
    </section>
  );
}

export default MainVideoInfo;
