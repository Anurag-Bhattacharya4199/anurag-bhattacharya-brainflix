/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Video Comments Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

//Importing Main Video Comment Stylesheet
import "./MainVideoComment.scss";

/**
 *
 * @param int time
 * @returns string of the timestamp in a local date format
 */
function convertDate(time) {
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
 * @param int time
 * @param string name
 * @param string comment
 * @returns the container of the main video
 */
function MainVideoComment({ time, name, comment }) {
  //Returns the container of the main video
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
            {convertDate(time)}
          </p>
        </div>
        <span className="mainVideoComment__commentContent-comment">
          {comment}
        </span>
      </div>
    </article>
  );
}

//Exporting the MainVideoComment function
export default MainVideoComment;
