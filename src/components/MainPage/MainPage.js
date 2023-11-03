import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import MainVideoCommentsList from "../../components/MainVideoCommentsList/MainVideoCommentsList";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import "./MainPage.scss";

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
