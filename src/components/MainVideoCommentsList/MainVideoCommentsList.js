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

/**
 *
 * @param object props
 * @returns the container for the Main Video Comments List
 */
function MainVideoCommentsList(props) {
  const { comments } = props;
  //Get the Comments Sub Array from Main Video Data array
  if (props.comments.length === 0) {
    return;
  }
  //Returns the container for the Main Video Comments List
  return (
    <section className="mainVideoCommentsList">
      {comments.map((comment) => (
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
