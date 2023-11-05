import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  firstVideoID,
  searchVideosAll,
  getVideoList,
  singleVideoData,
} from "../../utils/utils";
import axios from "axios";
import MainPage from "../../components/MainPage/MainPage";

function HomePage() {
  const [baseVideo] = useState(firstVideoID);
  const [videoID, setVideoID] = useState(baseVideo);
  const [videoList, setVideoList] = useState();
  const [videoInfo, setVideoInfo] = useState();

  const fetchVideoList = () =>
    axios.get(searchVideosAll).then((response) => {
      const filteredVideos = getVideoList(videoID, response.data);
      setVideoList(filteredVideos);
    });

  useEffect(() => {
    fetchVideoList();
  }, [videoID]);

  const fetchVideoInfo = () =>
    axios.get(singleVideoData(videoID)).then((response) => {
      setVideoInfo(response.data);
    });

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

export default HomePage;
