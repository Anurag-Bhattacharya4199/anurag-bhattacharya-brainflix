/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Next Video Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

//Import Next Video Stylesheet
import "./NextVideo.scss";

/**
 * @param int videoId
 * @param string title
 * @param string channel
 * @param function changeMainVideoData
 * @param string image
 * @returns the container for a video, with functionality of changing main video, by clicking
 */
function NextVideo(props) {
  const { title, channel, image } = props;

  return (
    <section className="videoContent">
      {/* Video Image Wrapper */}
      <article className="videoContent__videoWrapper">
        {/*Video Image */}
        <img
          src={image}
          alt="Video Poster"
          className="videoContent__videoWrapper-video"
        />
      </article>
      {/*Video Content */}
      <article className="videoContent__content">
        <h1 className="videoContent__content-title">{title}</h1>
        <p className="videoContent__content-channel">{channel}</p>
      </article>
    </section>
  );
}

//Exporting NextVideo Function
export default NextVideo;
