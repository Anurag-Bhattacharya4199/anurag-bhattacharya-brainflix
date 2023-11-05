/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 2
Description:
This is the Header.js File
In this file, the Header of the Website is created with the Website Logo, Search Input, Upload Button and Profile Pic
Diving Deeper Notes:
- I completed the Diving Deeper of Sprint 1, which is dynamic time for the video details and comment details
- Though, it was not asked, but, in a multi-page application with routes, added a Error page for any wrong routes
- Unable to figure out the Diving Deeper of Sprint 2 to make the Comments Form functional
*/

/*
Importing all files needed for this file
 */

//Importing Header Stylesheet
import "./Header.scss";

//Importing Website Logo from assets folder
import Logo from "../../assets/images/logo/BrainFlix-logo.svg";

//Importing Profile Pic Image from assets folder
import ProfilePic from "../../assets/images/Mohan-muruge.jpg";

//import Link to link to a Page Route
import { Link } from "react-router-dom";

/**
 * This function returns the container of the Header of the website
 * @returns the container for the Header
 */
function Header() {
  //Returns the container for the Header of the website
  return (
    <header className="mainHeader">
      {/*Website Logo links to the HomePage*/}
      <Link to="/">
        <div className="mainHeader__logoWrapper">
          <img
            src={Logo}
            alt="Logo"
            className="mainHeader__logoWrapper-logoImg"
          />
        </div>
      </Link>
      <nav className="mainHeader__navigation">
        <article className="mainHeader__searchWrapper">
          <input
            className="mainHeader__searchWrapper-input"
            placeholder="Search"
          ></input>
          <div className="mainHeader__profileWrapper">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="mainHeader__profileWrapper-profileImg"
            ></img>
          </div>
        </article>
        <article className="mainHeader__uploadWrapper">
          {/*Upload Button redirects to the Upload Page*/}
          <Link to="/upload">
            <button className="mainHeader__uploadWrapper-uploadBtn">
              UPLOAD
            </button>
          </Link>
          <div className="mainHeader__uploadWrapper-uploadProfileWrapper">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="mainHeader__uploadWrapper-uploadProfileImg"
            ></img>
          </div>
        </article>
      </nav>
    </header>
  );
}

//Exporting Header Function
export default Header;
