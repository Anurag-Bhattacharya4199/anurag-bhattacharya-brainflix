import "./NextVideoList.scss";
import Video from "../NextVideo/NextVideo";
import VideoListData from "../../data/videos.json";
import { useState } from "react";

function NextVideoList(props) {
  const { mainVideoId, changeMainVideoData } = props;
  const [videoData] = useState(VideoListData);

  return (
    <section className="nextVideos">
      <h1 className="nextVideos__title">NEXT VIDEOS</h1>
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

export default NextVideoList;
