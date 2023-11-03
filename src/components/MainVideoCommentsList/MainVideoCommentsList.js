/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Video Comments list Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
Importing all files needed for this file 
*/
//Importing the Main Video Comments List Styles
import "./MainVideoCommentsList.scss";
//Importing Main Video Comment Component
import MainVideoComment from "../MainVideoComment/MainVideoComment";
import { convertDate } from "../../utils/utils";

/**
 *
 * @param object props
 * @returns the container for the Main Video Comments List
 */
function MainVideoCommentsList({ videoComments }) {
  if (videoComments.length === 0) {
    return;
  }

  return (
    <section className="mainVideoCommentsList">
      {videoComments.map((comment) => (
        <MainVideoComment
          key={comment.id}
          name={comment.name}
          time={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

//Exporting MainVideoCommentsList Function
export default MainVideoCommentsList;
