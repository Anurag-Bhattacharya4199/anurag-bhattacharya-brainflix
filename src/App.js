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

//MainVideoDataList from JSON File
import MainVideosDataList from "./data/video-details.json";

//Use of State from React library
import { useState } from "react";

import Header from "./components/Header/Header";

//Main Page
import MainPage from "./pages/MainPage/MainPage";

import UploadPage from "./pages/UploadPage/UploadPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                mainVideoData={mainVideoData}
                changeMainVideoData={changeMainVideoData}
                mainVideoId={mainVideoData.id}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/video/:id"
            element={
              <MainPage
                mainVideoData={mainVideoData}
                changeMainVideoData={changeMainVideoData}
                mainVideoId={mainVideoData.id}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/*The Main Page Component is rendered here */}
    </>
  );
}

export default App;
