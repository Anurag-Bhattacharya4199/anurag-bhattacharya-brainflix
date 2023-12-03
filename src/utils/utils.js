/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the utils.js
In this file, all helper variables and/or functions are created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

//Import moment from moment package
import moment from "moment/moment";

//API URL, API KEY, firstVideoID, getting all Videos URL, api endpoint
export const BRAINFLIX_BASE_API_URL = "http://localhost:5050";
export const firstVideoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
export const allVideosURL = `${BRAINFLIX_BASE_API_URL}/videos`;

//Getting video information for a video based on videoID
export const singleVideoData = (videoId) => `${allVideosURL}/${videoId}`;

//URL for searching all videos
export const searchVideosAll = `${allVideosURL}`;

//Get full Video List
export const getVideoList = (videoId, videoArray) => {
  return videoArray.filter((video) => video.id !== videoId);
};

//Post Header object initialized
export const postHeader = { "Content-Type": "application/json" };

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
