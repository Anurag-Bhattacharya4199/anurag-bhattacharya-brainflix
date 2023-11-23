/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the HomePage.js File
In this file, the home page container
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

//Importing all the files needed for this file

//Importing useEffect and useState from react package
import { useEffect, useState } from "react";
//Importing useParams from react router dom package
import { useParams } from "react-router-dom";
//Importing firstVideoID, searchVideosAll function, getvideoList function, singleVideoData function from utils folder
import {
  firstVideoID,
  searchVideosAll,
  getVideoList,
  singleVideoData,
} from "../../utils/utils";
//Import axios from axios package
import axios from "axios";
//Importing MainPage Component
import MainPage from "../../components/MainPage/MainPage";

/**
 * This function returns the Main Page component
 * @returns the MainPage component
 */
function HomePage() {
  //States for the base video, video ID, video List and video Info
  const [baseVideo] = useState(firstVideoID);
  const [videoID, setVideoID] = useState(baseVideo);
  const [videoList, setVideoList] = useState();
  const [videoInfo, setVideoInfo] = useState();

  const fetchVideoList = async () => {
    try {
      const videos = await axios.get(searchVideosAll);
      const filteredVideos = getVideoList(videoID, videos.data);
      setVideoList(filteredVideos);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVideoList();
  }, [videoID]);

  const fetchVideoInfo = async () => {
    try {
      const videoInfo = await axios.get(singleVideoData(videoID));
      setVideoInfo(videoInfo.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVideoInfo();
  }, [videoID]);

  const handleVideoChange = (videoId) => {
    setVideoID(videoId);
  };

  const { videoId } = useParams();

  useEffect(() => {
    if (videoId) {
      if (Object.keys(videoId).length !== 0) {
        handleVideoChange(videoId);
      }
    } else {
      handleVideoChange(baseVideo);
    }
  }, [videoId]);

  return (
    <MainPage
      videoList={videoList}
      videoInfo={videoInfo}
      handleVideoChange={handleVideoChange}
      baseVideo={baseVideo}
    />
  );
}

//Export the function
export default HomePage;
