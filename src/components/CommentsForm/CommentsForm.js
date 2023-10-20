import "./CommentsForm.scss";
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";

function CommentsForm() {
  return (
    <section className="commentsForm">
      <section className="commentsForm__contentWrapper">
        <div className="commentsForm__content">
          <label className="commentsForm__title">JOIN THE CONVERSATION</label>
          <form className="commentsForm__main">
            <input
              className="commentsForm__commentInput"
              name="comment"
              for="comment"
              placeholder="Add a new comment"
            />
            <button className="commentsForm__submitButton">COMMENT</button>
          </form>
          <img
            className="commentsForm__formAvatar"
            src={FormAvatar}
            alt="Form Avatar"
          />
        </div>
      </section>
    </section>
  );
}

export default CommentsForm;
