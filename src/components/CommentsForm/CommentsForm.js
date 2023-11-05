/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the CommentsForm.js File
In this file, the Comments Form component is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
Importing all the files needed for this file
 */
//Importing Comments Form Stylesheet
import "./CommentsForm.scss";
//Importing the Form Avatar from assets folder
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";
//Importing handleSubmit from utils folder
import { handleSubmit } from "../../utils/utils";

/**
 * This function returns the Comments Form component
 * @returns the container of the Comments Form section
 */
function CommentsForm() {
  return (
    <section className="commentsForm">
      <div className="commentsForm__contentWrapper">
        <article className="commentsForm__contentWrapper-content">
          <label className="commentsForm__contentWrapper-title">
            JOIN THE CONVERSATION
          </label>
          <form className="commentsForm__form" onSubmit={handleSubmit}>
            <input
              className="commentsForm__form-input"
              name="comment"
              for="comment"
              placeholder="Add a new comment"
            />
            <button className="commentsForm__form-submitButton">COMMENT</button>
          </form>
          <img
            className="commentsForm__avatar"
            src={FormAvatar}
            alt="Form Avatar"
          />
        </article>
      </div>
    </section>
  );
}

//Exporting CommentsForm function
export default CommentsForm;
