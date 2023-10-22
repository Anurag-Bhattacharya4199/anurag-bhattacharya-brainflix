/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the App JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/**
All the Imports needed for this file
 */

//App Styles
import "./App.scss";

//Main Page
import MainPage from "./components/MainPage/MainPage";

//MainVideoDataList from JSON File
import MainVideosDataList from "./data/video-details.json";

//Use of State from React library
import { useState } from "react";

/**
 * This function is the main App Function, that returns the container of the full website
 * @returns container of website
 */
function App() {
  //Setting the main video data to be the 1st index of the main video data list array
  const [mainVideoData, setMainVideo] = useState(MainVideosDataList[0]);

  /**
   * This function is used to find and set the main video to be displayed on the website
   * @param int videoID
   */
  const changeMainVideoData = (videoID) => {
    const newVideo = MainVideosDataList.find((video) => video.id === videoID);
    setMainVideo(newVideo);
  };

  //This returns the main container of the full website
  return (
    <>
      {/*The Main Page Component is rendered here */}
      <MainPage
        mainVideoData={mainVideoData}
        changeMainVideoData={changeMainVideoData}
        mainVideoId={mainVideoData.id}
      />
    </>
  );
}

export default App;
