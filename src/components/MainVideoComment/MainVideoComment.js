/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the MainVideoComment.js File
In this file, the Main Video Comment component is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
All the imported files needed for this file
 */
//Importing the Stylesheet
import "./MainVideoComment.scss";
//Importing convertData function from utils
import { convertDate } from "../../utils/utils";

/**
 * This function returns the article for each comment to the video
 * @param string name
 * @param int time
 * @param string comment
 * @returns the container of the main video comment
 */
function MainVideoComment({ name, time, comment }) {
  //Returns a converted data value to a more real-time value using the convertData function
  const convertedDate = convertDate(time);

  return (
    <article className="mainVideoComment">
      <div className="mainVideoComment__avatarWrapper">
        <img className="mainVideoComment__avatarWrapper-avatar" alt="" />
      </div>
      <div className="mainVideoComment__commentContent">
        <div className="mainVideoComment__commentContent-header">
          <h3 className="mainVideoComment__commentContent-header__title">
            {name}
          </h3>
          <p className="mainVideoComment__commentContent-header__date">
            {convertedDate}
          </p>
        </div>
        <span className="mainVideoComment__commentContent-comment">
          {comment}
        </span>
      </div>
    </article>
  );
}

//Exporting the function
export default MainVideoComment;
