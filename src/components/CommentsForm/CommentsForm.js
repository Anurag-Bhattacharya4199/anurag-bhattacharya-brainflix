import "./CommentsForm.scss";
import FormAvatar from "../../assets/images/Mohan-muruge.jpg";

function CommentsForm() {
  return (
    <section className="videoCommentsForm">
      <h1 className="videoCommentsForm__mainTitle">Join the Conversation</h1>
      <div className="videoCommentsForm__content">
        <section className="videoCommentsForm__formWrapper">
          <div className="videoCommentsForm__formAvatarWrapper">
            <img
              src={FormAvatar}
              alt="Form Avatar"
              className="videoCommentsForm__formAvatar"
            />
          </div>
          <form
            id="videoCommentsForm__form"
            className="videoCommentsForm__form"
          >
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
            />
            <div className="videoCommentsForm__submitButtonWrapper">
              <button type="submit" className="videoCommentsForm__submitButton">
                COMMENT
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}

export default CommentsForm;
