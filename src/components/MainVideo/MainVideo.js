/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Video Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

//Importing the Main Video Stylesheet
import "./MainVideo.scss";

/**
 *
 * @param array props
 * @returns the container for the main video
 */
function MainVideo(props) {
  //Image and Video data from mainVideoData array
  const { image, video } = props.mainVideoData;

  //Returns container for the main video
  return (
    <section className="mainVideo">
      <video
        poster={image}
        className="mainVideo__video"
        controls
        src={video}
      ></video>
    </section>
  );
}

//Exporting the MainVideo function
export default MainVideo;
