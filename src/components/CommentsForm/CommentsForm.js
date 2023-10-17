import "./CommentsForm.scss";
import AddCommentIcon from "../../assets/images/icons/add_comment.svg";
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";

function CommentsForm() {
  return (
    <section className="commentsForm">
      <div className="commentsForm__content">
        <img
          src={FormAvatar}
          alt="Form Avatar"
          className="commentsForm__formAvatar"
        />
        <form id="commentsForm__form" className="commentsForm__form">
          <h1 className="commentsForm__form-title">JOIN THE CONVERSATION</h1>
          <input
            className="commentsForm__form-input"
            placeholder="Add a new comment"
          />
          <button className="commentsForm__form-submit">COMMENT</button>
        </form>
      </div>
    </section>
  );
}

export default CommentsForm;
