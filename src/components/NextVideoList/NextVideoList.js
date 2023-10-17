import "./NextVideoList.scss";
import Video from "../NextVideo/NextVideo";
import VideoListData from "../../data/videos.json";
import { useState } from "react";

function NextVideoList(props) {
  const { mainVideoId, changeMainVideoData } = props;
  const [videoData] = useState(VideoListData);

  return (
    <section className="nextVideos">
      <div className="nextVideos__titleWrapper">
        <h3 className="nextVideos__title">Next Videos</h3>
      </div>
      <section className="nextVideos__content">
        {videoData
          .filter((video) => {
            return video.id !== mainVideoId;
          })
          .map((video, index) => (
            <Video
              key={index}
              changeMainVideoData={changeMainVideoData}
              image={video.image}
              title={video.title}
              channel={video.channel}
              videoId={video.id}
            />
          ))}
      </section>
    </section>
  );
}

{
  /* <div className="nextVideoList__titleWrapper">
        <h3 className="nextVideoList__title">Next Videos</h3>
      </div>
      <div className="nextVideoList__content">
        {videoData
          .filter((video) => {
            return video.id !== mainVideoId;
          })
          .map((video, index) => (
            <Video
              key={index}
              changeMainVideoData={changeMainVideoData}
              image={video.image}
              title={video.title}
              channel={video.channel}
              videoId={video.id}
            />
          ))} */
}

export default NextVideoList;
