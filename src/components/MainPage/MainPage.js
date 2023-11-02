/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Main Page Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
*/

/*
Importing all files needed for this file
 */
//Import MainVideo Component
import MainVideo from "../MainVideo/MainVideo";
//Import Main Video Info Component
import MainVideoInfo from "../MainVideoInfo/MainVideoInfo";
//Import Comments Form Component
import CommentsForm from "../CommentsForm/CommentsForm";
//Import Main Video Comments List Component
import MainVideoCommentsList from "../MainVideoCommentsList/MainVideoCommentsList";
//Import Next Video List Component
import NextVideoList from "../NextVideoList/NextVideoList";
//Import Main Page Stylesheet
import "./MainPage.scss";

/**
 *
 * @param array mainVideoData
 * @param function changeMainVideoData
 * @param int mainVideoId
 * @returns the container for full Main Page (Home Page)
 */
function MainPage(props) {
  const { currentVideo, comments, mainVideoID } = props;

  return (
    <>
      {/*MainVideo Component */}
      <MainVideo currentVideo={currentVideo} />
      <section className="mainPageContent">
        <div className="mainPageContent__leftPanel">
          <MainVideoInfo
            title={currentVideo.title}
            channel={currentVideo.channel}
            timestamp={currentVideo.timestamp}
            views={currentVideo.views}
            likes={currentVideo.likes}
            description={currentVideo.description}
            numComments={comments.length}
          />
          <CommentsForm />
          <MainVideoCommentsList comments={comments} />
        </div>
        <div className="mainPageContent__rightPanel">
          <NextVideoList
            currentVideo={currentVideo}
            mainVideoID={mainVideoID}
          />
        </div>
      </section>
    </>
  );
}

//Exporting MainPage function
export default MainPage;
