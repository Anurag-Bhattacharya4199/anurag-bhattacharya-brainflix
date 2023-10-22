import Header from "../Header/Header";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoInfo from "../MainVideoInfo/MainVideoInfo";
import CommentsForm from "../CommentsForm/CommentsForm";
import MainVideoCommentsList from "../MainVideoCommentsList/MainVideoCommentsList";
import NextVideoList from "../NextVideoList/NextVideoList";
import "./MainPage.scss";

function MainPage({ mainVideoData, changeMainVideoData, mainVideoId }) {
  return (
    <>
      <Header />
      <MainVideo mainVideoData={mainVideoData} />
      <section className="mainPageContent">
        <div className="mainPageContent__leftPanel">
          <MainVideoInfo mainVideoData={mainVideoData} />
          <CommentsForm />
          <MainVideoCommentsList mainVideoData={mainVideoData} />
        </div>
        <div className="mainPageContent__rightPanel">
          <NextVideoList
            changeMainVideoData={changeMainVideoData}
            mainVideoId={mainVideoId}
          />
        </div>
      </section>
    </>
  );
}

export default MainPage;
