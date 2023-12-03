/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the NextVideoList.js
In this file, All the Next Video List are created with a map through the videoList prop
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
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
