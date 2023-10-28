//MainVideoDataList from JSON File
import MainVideosDataList from "../../data/video-details.json";

//Use of State from React library
import { useState } from "react";

import MainPage from "../../components/MainPage/MainPage";

function HomePage() {
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

  return (
    <>
      <MainPage
        mainVideoData={mainVideoData}
        changeMainVideoData={changeMainVideoData}
        mainVideoId={mainVideoData.id}
      />
    </>
  );
}

export default HomePage;
