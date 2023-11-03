export const BRAINFLIX_BASE_API_URL = "https://project-2-api.herokuapp.com";
export const BRAINFLIX_API_KEY = "7313034f-58cc-4587-b47b-18dae67308e3";
export const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
export const allVideosURL = `${BRAINFLIX_BASE_API_URL}/videos`;
export const api_keyEndpoint = `?api_key=${BRAINFLIX_API_KEY}`;
export const singleVideoData = (videoId) =>
  `${allVideosURL}/${videoId}${api_keyEndpoint}`;
export const searchVideosAll = `${allVideosURL}${api_keyEndpoint}`;
export const getVideos = (videoId, videoArray) => {
  return videoArray.filter((video) => video.id !== videoId);
};

export function convertDate(time) {
  let unixTimeStamp = time;
  let date = new Date(unixTimeStamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  let dateString = `${month}/${day}/${year}`;
  return dateString;
}
