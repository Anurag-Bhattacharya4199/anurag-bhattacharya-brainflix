import Header from "../Header/Header";
import MainVideo from "../MainVideo/MainVideo";
import MainVideoInfo from "../MainVideoInfo/MainVideoInfo";
import CommentsForm from "../CommentsForm/CommentsForm";
import MainVideoCommentsList from "../MainVideoCommentsList/MainVideoCommentsList";
import NextVideoList from "../NextVideoList/NextVideoList";

function MainPage(props) {
  const { mainVideoData, changeMainVideoData, mainVideoId } = props;

  return (
    <>
      <Header />
      <MainVideo mainVideoData={mainVideoData} />
      <MainVideoInfo mainVideoData={mainVideoData} />
      <CommentsForm />
      <MainVideoCommentsList mainVideoData={mainVideoData} />
      <NextVideoList
        changeMainVideoData={changeMainVideoData}
        mainVideoId={mainVideoId}
      />
    </>
  );
}

export default MainPage;
