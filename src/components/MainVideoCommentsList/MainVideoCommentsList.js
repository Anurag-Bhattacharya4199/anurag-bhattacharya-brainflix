import "./MainVideoCommentsList.scss";
import MainVideoComment from "../MainVideoComment/MainVideoComment";

function MainVideoCommentsList(props) {
  const { comments } = props.mainVideoData;

  return (
    <section className="mainVideoCommentsList">
      {comments.map((comment, index) => (
        <MainVideoComment
          key={index}
          name={comment.name}
          time={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default MainVideoCommentsList;
