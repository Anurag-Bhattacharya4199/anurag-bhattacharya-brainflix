import "./CommentsForm.scss";
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";

function CommentsForm() {
  return (
    <section className="commentsForm">
      <div className="commentsForm__contentWrapper">
        <article className="commentsForm__contentWrapper-content">
          <label className="commentsForm__contentWrapper-title">
            JOIN THE CONVERSATION
          </label>
          <form className="commentsForm__form">
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

export default CommentsForm;
