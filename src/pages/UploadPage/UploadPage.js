/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the UploadPage.js
In this file, the UploadContent is used
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
*/

//Importing the stylesheet for this file
import "./UploadPage.scss";
//Importing the UploadComponent
import UploadComponent from "../../components/UploadComponent/UploadComponent";

/**
 * This function returns the UploadComponent
 * @returns the UploadComponent
 */
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
