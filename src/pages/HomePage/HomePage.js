//Use of State from React library
import { useState, useEffect } from "react";

import MainPage from "../../components/MainPage/MainPage";
import axios from "axios";

import { BRAINFLIX_BASE_API_URL, BRAINFLIX_API_KEY } from "../../utils/utils";

function HomePage() {
  const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const [video, setVideo] = useState([]);
  const [videoComments, setVideoComments] = useState([]);
  const [mainVideoID, setMainVideoID] = useState([]);

  const fetchFirstVideo = () =>
    axios
      .get(
        `${BRAINFLIX_BASE_API_URL}/videos/${firstVideoID}?api_key=${BRAINFLIX_API_KEY}`
      )
      .then((response) => {
        setVideo(response.data);
        setVideoComments(response.data.comments);
        setMainVideoID(response.data.id);
      });

  useEffect(() => {
    fetchFirstVideo();
  }, []);

  return (
    <>
      <MainPage
        currentVideo={video}
        comments={videoComments}
        mainVideoID={mainVideoID}
      />
    </>
  );
}

export default HomePage;
