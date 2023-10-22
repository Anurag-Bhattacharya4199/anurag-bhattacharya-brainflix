import "./NextVideoList.scss";
import Video from "../NextVideo/NextVideo";
import VideoListData from "../../data/videos.json";
import { useState } from "react";

function NextVideoList({ mainVideoId, changeMainVideoData }) {
  const [videoData] = useState(VideoListData);

  return (
    <section className="nextVideosList">
      <h1 className="nextVideosList__title">NEXT VIDEOS</h1>
      <article className="nextVideosList__mainContent">
        {videoData
          .filter((video) => {
            return video.id !== mainVideoId;
          })
          .map((video) => (
            <Video
              key={video.id}
              changeMainVideoData={changeMainVideoData}
              image={video.image}
              title={video.title}
              channel={video.channel}
              videoId={video.id}
            />
          ))}
      </article>
    </section>
  );
}

export default NextVideoList;
