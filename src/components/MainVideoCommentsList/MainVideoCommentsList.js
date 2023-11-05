/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the MainVideoCommentsList
In this file, the component that holds all the comments for the videos is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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
