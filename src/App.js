import "./App.scss";
import Header from "./components/Header/Header";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import MainVideoCommentsList from "./components/MainVideoCommentsList/MainVideoCommentsList";
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
      <Header />
      <MainVideo mainVideoData={mainVideoData} />
      <MainVideoInfo mainVideoData={mainVideoData} />
      <CommentsForm />
      <MainVideoCommentsList mainVideoData={mainVideoData} />
      <NextVideoList
        changeMainVideoData={changeMainVideoData}
        mainVideoId={mainVideoData.id}
      />
    </>
  );
}

export default App;
