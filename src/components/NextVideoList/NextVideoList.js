/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the NextVideoList.js
In this file, the container of all the videos in the side panel
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
All the Import needed for this file
 */
//Import Stylesheet needed for this file
import "./NextVideoList.scss";
//Import Video Component
import Video from "../NextVideo/NextVideo";

/**
 * Thus function returns the container for the side video panel component
 * @param array videoList
 * @returns the container of the Next Videos List
 */
function NextVideoList({ videoList }) {
  return (
    <section className="nextVideosList">
      <h1 className="nextVideosList__title">NEXT VIDEOS</h1>
      <article className="nextVideosList__mainContent">
        {videoList.map((video) => (
          <Video
            key={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            videoID={video.id}
          />
        ))}
      </article>
    </section>
  );
}

//Exporting the NextVideoList function
export default NextVideoList;
