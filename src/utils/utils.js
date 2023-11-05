import moment from "moment/moment";

export const BRAINFLIX_BASE_API_URL = "https://project-2-api.herokuapp.com";
export const BRAINFLIX_API_KEY = "7313034f-58cc-4587-b47b-18dae67308e3";
export const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
export const allVideosURL = `${BRAINFLIX_BASE_API_URL}/videos`;
export const api_keyEndpoint = `?api_key=${BRAINFLIX_API_KEY}`;

export const singleVideoData = (videoId) =>
  `${allVideosURL}/${videoId}${api_keyEndpoint}`;

export const searchVideosAll = `${allVideosURL}${api_keyEndpoint}`;

export const getVideoList = (videoId, videoArray) => {
  return videoArray.filter((video) => video.id !== videoId);
};

export function convertDate(time) {
  let newMoment = moment(time).startOf("hour").fromNow();
  return newMoment;
}

export const handleSubmit = (event) => {
  event.preventDefault();
  alert("A Comment has been added");
};
