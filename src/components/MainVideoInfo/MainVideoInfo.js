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
  const { title, channel, timestamp, views, likes, description, comments } =
    mainVideoData;

  return (
    <section className="mainVideoInfo">
      <div className="mainVideoInfo__content">
        <h1 className="mainVideoInfo__title">{title}</h1>
        <div className="mainVideoInfo__statistics">
          <div className="mainVideoInfo__statistics-1">
            <p className="mainVideoInfo__statistics-channel">By {channel}</p>
            <p className="mainVideoInfo__statistics-date">
              {convertTime(timestamp)}
            </p>
          </div>
          <div className="mainVideoInfo__statistics-2">
            <p className="mainVideoInfo__statistics-views">
              <img
                className="mainVideoInfo__statistics-viewsIcon"
                src={ViewsIcon}
                alt="Views Icon"
              />
              {views}
            </p>
            <p className="mainVideoInfo__statistics-likes">
              <img
                className="mainVideoInfo__statistics-likesIcon"
                src={LikesIcon}
                alt="Likes Icon"
              />
              {likes}
            </p>
          </div>
        </div>
        <p className="mainVideoInfo__description">{description}</p>
        <p className="mainVideoInfo__numComments">{comments.length} Comments</p>
      </div>
    </section>
  );
}

export default MainVideoInfo;
