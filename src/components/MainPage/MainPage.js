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
//Import Header Component
import Header from "../Header/Header";
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
function MainPage({ mainVideoData, changeMainVideoData, mainVideoId }) {
  return (
    <>
      {/*Header Component */}
      <Header />
      {/*MainVideo Component */}
      <MainVideo mainVideoData={mainVideoData} />
      {/*mainPageContent Component*/}
      <section className="mainPageContent">
        {/*Left Section (for Desktop) */}
        <div className="mainPageContent__leftPanel">
          {/*MainVideoInfo Component */}
          <MainVideoInfo mainVideoData={mainVideoData} />
          {/*CommentsForm Component */}
          <CommentsForm />
          {/*MainVideoCommentsList Component */}
          <MainVideoCommentsList mainVideoData={mainVideoData} />
        </div>
        {/*Right Section (for Desktop) */}
        <div className="mainPageContent__rightPanel">
          {/*NextVideoList Component */}
          <NextVideoList
            changeMainVideoData={changeMainVideoData}
            mainVideoId={mainVideoId}
          />
        </div>
      </section>
    </>
  );
}

//Exporting MainPage function
export default MainPage;
