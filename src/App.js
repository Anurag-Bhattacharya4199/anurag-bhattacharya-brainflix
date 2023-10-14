import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import MainVideosDataList from "./data/video-details.json";
import { useState } from "react";

function App() {
  const [mainVideoData, setMainVideo] = useState(MainVideosDataList[0]);

  const changeMainVideoData = (id) => {
    const newVideo = MainVideosDataList.find((video) => video.id === id);
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

export default App;
