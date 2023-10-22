/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Next Video List Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
All the Import needed for this file
 */
//Import Stylesheet needed for this file
import "./NextVideoList.scss";
//Import Video Component
import Video from "../NextVideo/NextVideo";
//Import VideoListData Component
import VideoListData from "../../data/videos.json";
//Use of State from React Library
import { useState } from "react";

/**
 *
 * @param int mainVideoId
 * @param function changeMainVideoData
 * @returns the container of the Next Videos List
 */
function NextVideoList({ mainVideoId, changeMainVideoData }) {
  //Videos Data from JSON File
  const [videoData] = useState(VideoListData);

  //Returns the container of the Next Videos List Section
  return (
    <section className="nextVideosList">
      <h1 className="nextVideosList__title">NEXT VIDEOS</h1>
      <article className="nextVideosList__mainContent">
        {/*Filters the Video Data to not show the main video and creates a Video Component for each Video data*/}
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

//Exporting the NextVideoList function
export default NextVideoList;
