/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the MainVideo.js
In this file, the Main Video element is created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

/*
All the imported files needed for this file
 */
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
        src={`${video}/?api_key='Anurag'`}
      ></video>
    </section>
  );
}

//Exporting the MainVideo function
export default MainVideo;
