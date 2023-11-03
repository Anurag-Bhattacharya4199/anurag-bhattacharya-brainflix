/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Video Comments Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

//Importing Main Video Comment Stylesheet
import "./MainVideoComment.scss";
import { convertDate } from "../../utils/utils";

/**
 *
 * @param int time
 * @param string name
 * @param string comment
 * @returns the container of the main video
 */
function MainVideoComment({ name, time, comment }) {
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

export default MainVideoComment;
