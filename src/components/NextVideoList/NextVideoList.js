import "./NextVideoList.scss";
import Video from "../NextVideo/NextVideo";
import VideoListData from "../../data/videos.json";
import { useState } from "react";

function NextVideoList(props) {
  const { mainVideoId, changeMainVideoData } = props;
  const [videoData] = useState(VideoListData);

  return <section className="nextVideoList"></section>;
}

export default NextVideoList;
