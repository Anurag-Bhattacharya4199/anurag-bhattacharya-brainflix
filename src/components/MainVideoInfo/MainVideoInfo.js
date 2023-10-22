/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Video Info Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
Importing files needed for this file
 */
//Importing Main Video Info Stylesheet
import "./MainVideoInfo.scss";
//Importing Views Icon Image from assets folder
import ViewsIcon from "../../assets/images/icons/views.svg";
//Importing Likes Icon Image from assets folder
import LikesIcon from "../../assets/images/icons/likes.svg";

/**
 *
 * @param int time
 * @returns a string to represent a local date from the time parameter
 */
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

/**
 *
 * @param array mainVideoData
 * @returns the container for the Main Video Information
 */
function MainVideoInfo({ mainVideoData }) {
  //Getting specific values from the array needed to be displayed
  const { title, channel, timestamp, views, likes, description, comments } =
    mainVideoData;

  //returns the container for the Main Video Information
  return (
    <section className="mainVideoInfo">
      <div className="mainVideoInfo__content">
        <h1 className="mainVideoInfo__title">{title}</h1>
        <section className="mainVideoInfo__baseStatistics">
          <article className="mainVideoInfo__baseStatistics-leftSide">
            <p className="mainVideoInfo__baseStatistics-channel">
              By {channel}
            </p>
            <p className="mainVideoInfo__baseStatistics-date">
              {convertTime(timestamp)}
            </p>
          </article>
          <article className="mainVideoInfo__baseStatistics-rightSide">
            <p className="mainVideoInfo__baseStatistics-viewsWrapper">
              <img
                className="mainVideoInfo__baseStatistics-viewsIcon"
                src={ViewsIcon}
                alt="Views Icon"
              />
              {views}
            </p>
            <p className="mainVideoInfo__baseStatistics-likesWrapper">
              <img
                className="mainVideoInfo__baseStatistics-likesIcon"
                src={LikesIcon}
                alt="Likes Icon"
              />
              {likes}
            </p>
          </article>
        </section>
        <p className="mainVideoInfo__description">{description}</p>
        <p className="mainVideoInfo__numComments">{comments.length} Comments</p>
      </div>
    </section>
  );
}

//Exporting the MainVideoInfo function
export default MainVideoInfo;
