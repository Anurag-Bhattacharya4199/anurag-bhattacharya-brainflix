import "./MainVideoComment.scss";

function convertDate(time) {
  let unixTimeStamp = time;
  let date = new Date(unixTimeStamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  let dateString = `${month}/${day}/${year}`;
  return dateString;
}

function MainVideoComment(props) {
  const { time, name, comment } = props;

  return (
    <article className="mainVideoComment">
      <div className="mainVideoComment__avatarWrapper">
        <img className="mainVideoComment__avatar" src="" alt="Comment Avatar" />
      </div>
      <div className="mainVideoComment__commentContent">
        <div className="mainVideoComment__headingContent">
          <h3 className="mainVideoComment__title">{name}</h3>
          <p className="mainVideoComment__date">{convertDate(time)}</p>
        </div>
        <span className="mainVideoComment__comment">{comment}</span>
      </div>
    </article>
  );
}

export default MainVideoComment;
