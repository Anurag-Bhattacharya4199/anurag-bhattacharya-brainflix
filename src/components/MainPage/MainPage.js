import Header from "../Header/Header";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoInfo from "../MainVideoInfo/MainVideoInfo";
import CommentsForm from "../CommentsForm/CommentsForm";
import MainVideoCommentsList from "../MainVideoCommentsList/MainVideoCommentsList";
import NextVideoList from "../NextVideoList/NextVideoList";
import "./MainPage.scss";

function MainPage(props) {
  const { mainVideoData, changeMainVideoData, mainVideoId } = props;

  return (
    <>
      <Header />
      <MainVideo mainVideoData={mainVideoData} />
      <section className="mainContent">
        <div className="mainContent__left">
          <MainVideoInfo mainVideoData={mainVideoData} />
          <CommentsForm />
          <MainVideoCommentsList mainVideoData={mainVideoData} />
        </div>
        <div className="mainContent__right">
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
