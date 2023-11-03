/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Next Video List Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
All the Import needed for this file
 */
//Import Stylesheet needed for this file
import "./NextVideoList.scss";
//Import Video Component
import Video from "../NextVideo/NextVideo";

/**
 *
 * @param int mainVideoId
 * @param function changeMainVideoData
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
