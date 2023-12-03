/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the HomePage.js
In this file, all the backend calls needed for the application are done and the MainPage component is used
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
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

  //With Axios and UseEffect, a GET request is called to the server to get the video list
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

  //With Axios and UseEffect, a GET request is called to the server to get information of a specific video by their ID
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

  //Handles when the main video is changed, based on Video ID
  const handleVideoChange = (videoId) => {
    setVideoID(videoId);
  };

  //Video ID is initialized using the params option given in the URL
  const { videoId } = useParams();

  //With UseEffect, the handleVideoChange function is called, depending on whether the video ID equals the base Video ID or another ID
  useEffect(() => {
    if (videoId) {
      if (Object.keys(videoId).length !== 0) {
        handleVideoChange(videoId);
      }
    } else {
      handleVideoChange(baseVideo);
    }
  }, [videoId]);

  //Returns the MainPage Component
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
