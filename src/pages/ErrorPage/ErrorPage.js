/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the ErrorPage.js File
In this file, the error page content container
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

//Importing Link from react router dom package
import { Link } from "react-router-dom";
//Importing the Stylesheet of this file
import "./ErrorPage.scss";

/**
 * This function returns the error page content container
 * @returns the error page content container
 */
function ErrorPage() {
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">WRONG URL!</h1>
      <Link to="/">
        <button className="errorPage__homeBtn">
          Click Here to return to Home Page
        </button>
      </Link>
    </div>
  );
}

//Exporting the function
export default ErrorPage;
