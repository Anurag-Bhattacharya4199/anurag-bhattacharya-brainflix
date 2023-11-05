/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the UploadPage.js File
In this file, the upload page is built
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
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
