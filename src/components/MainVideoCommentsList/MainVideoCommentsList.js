/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the MainVideoCommentsList.js
In this file, the list of video comments are created through mapping of the videoComments prop
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

/*
Importing all files needed for this file 
*/
//Importing the Main Video Comments List Styles
import "./MainVideoCommentsList.scss";
//Importing Main Video Comment Component
import MainVideoComment from "../MainVideoComment/MainVideoComment";

/**
 *
 * @param array videoComments
 * @returns the container for the Main Video Comments List
 */
function MainVideoCommentsList({ videoComments }) {
  //Makes sure the length of the comments array is not 0, if it is, error
  if (videoComments.length === 0) {
    return;
  }

  //Returns the container of all the comments for the video, through mapping through the videoComments array
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
