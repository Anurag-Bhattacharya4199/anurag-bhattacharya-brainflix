/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the MainPage.js File
In this file, the Main Content of the webpage are built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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
          <CommentsForm />
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
