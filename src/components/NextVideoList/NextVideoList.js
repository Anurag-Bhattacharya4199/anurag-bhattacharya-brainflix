import "./NextVideoList.scss";
import Video from "../NextVideo/NextVideo";
import VideoListData from "../../data/videos.json";
import { useState } from "react";

function NextVideoList(props) {
  const [videoData, setVideoData] = useState(VideoListData);
  return (
    <section className="nextVideoList">
      <div className="nextVideoList__titleWrapper">
        <h3 className="nextVideoList__title">Next Videos</h3>
      </div>
      <div className="nextVideoList__content">
        {videoData
          .filter((video) => {
            return video.id != props.mainVideoId;
          })
          .map((video, index) => (
            <Video
              key={index}
              changeMainVideoData={props.changeMainVideoData}
              image={video.image}
              title={video.title}
              channel={video.channel}
              videoId={video.id}
            />
          ))}
      </div>
    </section>
  );
}

export default NextVideoList;
