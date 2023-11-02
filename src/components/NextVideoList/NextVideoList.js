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
//Use of State from React Library
import { useState, useEffect } from "react";
import axios from "axios";
import { BRAINFLIX_BASE_API_URL, BRAINFLIX_API_KEY } from "../../utils/utils";

/**
 *
 * @param int mainVideoId
 * @param function changeMainVideoData
 * @returns the container of the Next Videos List
 */
function NextVideoList(props) {
  const { mainVideoID } = props;
  const [videos, setVideos] = useState([]);
  const fetchVideos = () =>
    axios
      .get(`${BRAINFLIX_BASE_API_URL}/videos?api_key=${BRAINFLIX_API_KEY}`)
      .then((response) => {
        const filteredResponse = response.data.filter((item) => {
          return item.id !== mainVideoID;
        });
        setVideos(filteredResponse);
      });

  useEffect(() => {
    fetchVideos();
  }, []);

  //Returns the container of the Next Videos List Section
  return (
    <section className="nextVideosList">
      <h1 className="nextVideosList__title">NEXT VIDEOS</h1>
      <article className="nextVideosList__mainContent">
        {videos.map((item) => (
          <Video
            key={item.id}
            image={item.image}
            title={item.title}
            channel={item.channel}
            videoID={item.id}
          />
        ))}
      </article>
    </section>
  );
}

//Exporting the NextVideoList function
export default NextVideoList;
