/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the NextVideo.js
In this file, the video container for each side video panel is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
All the imported files needed for this file
 */
//Import Link from react router dom package
import { Link } from "react-router-dom";
//Importing the Stylesheet of this file
import "./NextVideo.scss";

/**
 * This function returns the container for each side video panel
 * @param string title
 * @param string channel
 * @param string image
 * @param int videoID
 * @returns the container for a video, with functionality of changing the main video, by linking to a new route with the videoID
 */
function NextVideo({ title, channel, image, videoID }) {
  return (
    <Link to={`/videos/${videoID}`} className="hyperLink">
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
    </Link>
  );
}

//Exporting NextVideo Function
export default NextVideo;
