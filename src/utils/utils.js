/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the utils.js File
In this file, any extra functions or variables needed across the website are stored here
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

//Import moment from moment package
import moment from "moment/moment";

//API URL, API KEY, firstVideoID, getting all Videos URL, api endpoint
export const BRAINFLIX_BASE_API_URL = "https://project-2-api.herokuapp.com";
export const BRAINFLIX_API_KEY = "7313034f-58cc-4587-b47b-18dae67308e3";
export const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
export const allVideosURL = `${BRAINFLIX_BASE_API_URL}/videos`;
export const api_keyEndpoint = `?api_key=${BRAINFLIX_API_KEY}`;

//Getting video information for a video based on videoID
export const singleVideoData = (videoId) =>
  `${allVideosURL}/${videoId}${api_keyEndpoint}`;

//URL for searching all videos
export const searchVideosAll = `${allVideosURL}${api_keyEndpoint}`;

//Get full Video List
export const getVideoList = (videoId, videoArray) => {
  return videoArray.filter((video) => video.id !== videoId);
};

//Convert data to real-time date
export function convertDate(time) {
  let newMoment = moment(time).startOf("hour").fromNow();
  return newMoment;
}

//Handle Comments Form Submit
export const handleSubmit = (event) => {
  event.preventDefault();
  alert("A Comment has been added");
};
