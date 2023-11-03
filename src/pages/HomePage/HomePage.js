import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  firstVideoID,
  searchVideosAll,
  getVideos,
  singleVideoData,
} from "../../utils/utils";
import axios from "axios";
import MainPage from "../../components/MainPage/MainPage";

function HomePage() {
  const [baseVideo] = useState(firstVideoID);
  const [baseVideoID, setBaseVideoID] = useState(baseVideo);
  const [videoList, setVideoList] = useState();
  const [videoInfo, setVideoInfo] = useState();

  const fetchVideoList = () =>
    axios.get(searchVideosAll).then((response) => {
      const filteredVideos = getVideos(baseVideoID, response.data);
      setVideoList(filteredVideos);
    });

  useEffect(() => {
    fetchVideoList();
  }, [baseVideoID]);

  const fetchVideoInfo = () =>
    axios.get(singleVideoData(baseVideoID)).then((response) => {
      setVideoInfo(response.data);
    });

  useEffect(() => {
    fetchVideoInfo();
  }, [baseVideoID]);

  const handleVideoChange = (videoId) => {
    setBaseVideoID(videoId);
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
