import "./UploadPage.scss";
import UploadComponent from "../../components/UploadComponent/UploadComponent";

function UploadPage() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__content">
        <UploadComponent />
      </div>
    </section>
  );
}

export default UploadPage;
