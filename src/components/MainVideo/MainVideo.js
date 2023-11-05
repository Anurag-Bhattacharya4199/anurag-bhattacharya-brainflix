/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the MainVideo.js File
In this file, the Main Video Component is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
All the imported files needed for this file
 */
//Importing the API Key from utils folder
import { BRAINFLIX_API_KEY } from "../../utils/utils";
//Importing the Stylesheet
import "./MainVideo.scss";

/**
 *
 * @param array videoInfo
 * @returns the container for the main video
 */
function MainVideo({ videoInfo }) {
  //image and video information is extracted from the array
  const { image, video } = videoInfo;

  //Returns container for the main video
  return (
    <section className="mainVideo">
      <video
        poster={image}
        className="mainVideo__video"
        controls
        src={`${video}?api_key=${BRAINFLIX_API_KEY}`}
      ></video>
    </section>
  );
}

//Exporting the MainVideo function
export default MainVideo;
