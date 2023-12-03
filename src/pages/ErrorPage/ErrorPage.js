/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 3
Description:
- This is the ErrorPage.js
In this file, the contents of the error page are created
Diving Deeper Notes:
- Unable to figure out the Diving Deeper parts of Sprint 3
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
