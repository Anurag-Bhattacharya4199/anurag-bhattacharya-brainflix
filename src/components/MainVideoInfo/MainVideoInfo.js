/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the MainVideoInfo.js File
In this file, the Video Information component is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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
//Importing the convertData function from utils folder
import { convertDate } from "../../utils/utils";

/**
 * This function returns the container of the video information
 * @param object videoInfo
 * @returns the container of the video information
 */
function MainVideoInfo({ videoInfo }) {
  //Destructures the video info prop to the specific values of timestamp, comments, title, channel, views, likes and description
  const { timestamp, comments, title, channel, views, likes, description } =
    videoInfo;

  //Converts the timestamp to a more real-time date value
  const convertedDate = convertDate(timestamp);
  //Gets the number of comments for the video
  const numComments = comments.length;

  //Returns the container of the video information
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
              {convertedDate}
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
        <p className="mainVideoInfo__numComments">{numComments} Comments</p>
      </div>
    </section>
  );
}

//Exporting the MainVideoInfo function
export default MainVideoInfo;
