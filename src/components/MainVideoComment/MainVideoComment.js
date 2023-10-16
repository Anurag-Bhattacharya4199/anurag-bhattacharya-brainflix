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

  return <section className="mainVideoComment"></section>;
}

export default MainVideoComment;
