/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the MainVideoComment.js
In this file, Each comment block of the video is created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
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
