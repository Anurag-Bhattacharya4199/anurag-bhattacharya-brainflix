/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Comments Form Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
Importing all the files needed for this file
 */
//Importing Comments Form Stylesheet
import "./CommentsForm.scss";
//Importing the Form Avatar from assets folder
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";
import { handleSubmit } from "../../utils/utils";

/**
 *
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
