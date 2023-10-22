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

function MainVideoComment({ time, name, comment }) {
  return (
    <article className="mainVideoComment">
      <div className="mainVideoComment__avatarWrapper">
        <img className="mainVideoComment__avatarWrapper-avatar" alt="" />
      </div>
      <div className="mainVideoComment__commentContent">
        <div className="mainVideoComment__commentContent-header">
          <h3 className="mainVideoComment__commentContent-header__title">
            {name}
          </h3>
          <p className="mainVideoComment__commentContent-header__date">
            {convertDate(time)}
          </p>
        </div>
        <span className="mainVideoComment__commentContent-comment">
          {comment}
        </span>
      </div>
    </article>
  );
}

export default MainVideoComment;
