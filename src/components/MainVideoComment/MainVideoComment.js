import "./MainVideoComment.scss";

function MainVideoComment(props) {
  let unixTimeStamp = props.time;
  let date = new Date(unixTimeStamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  let dateString = `${month}/${day}/${year}`;
  return (
    <section className="mainVideoComment">
      <div className="mainVideoComment__avatarWrapper">
        <img className="mainVideoComment" />
      </div>
      <div className="mainVideoComment__headingTitles">
        <h3 className="mainVideoComment__title">{props.name}</h3>
        <p className="mainVideoComment__date">{dateString}</p>
      </div>
      <span className="mainVideoComment__comment">{props.comment}</span>
    </section>
  );
}

export default MainVideoComment;
