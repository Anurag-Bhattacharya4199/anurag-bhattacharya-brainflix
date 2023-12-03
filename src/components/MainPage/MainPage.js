/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the MainPage.js
In this file, All the components needed for the Main Page are created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

/*
All the imports needed for this file
 */

//Import MainVideo, MainVideoInfo, CommentsForm, MainVideoCommentsList, NextVideosList components
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import MainVideoCommentsList from "../../components/MainVideoCommentsList/MainVideoCommentsList";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import "./MainPage.scss";

/**
 * This function builds the main page content structure
 * @param {array} videoInfo
 * @param {array} videoList
 * @returns the main page content structure
 */
function MainPage({ videoInfo, videoList }) {
  return (
    <>
      {videoInfo && <MainVideo videoInfo={videoInfo} />}
      <section className="mainPageContent">
        <div className="mainPageContent__leftPanel">
          {videoInfo && <MainVideoInfo videoInfo={videoInfo} />}
          {<CommentsForm />}
          {videoInfo && (
            <MainVideoCommentsList videoComments={videoInfo.comments} />
          )}
        </div>
        <div className="mainPageContent__rightPanel">
          {videoList && <NextVideoList videoList={videoList} />}
        </div>
      </section>
    </>
  );
}

export default MainPage;
