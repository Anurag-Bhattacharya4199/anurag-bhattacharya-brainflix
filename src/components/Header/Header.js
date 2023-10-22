/*
Name: Anurag Bhattacharya
Project: BrainFlix - Sprint 1
Description: This is the Header Component JS File
Diving Deeper Notes:
I was unable to figure out the Diving Deeper Section for this Sprint
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

/**
 *
 * @returns the container for the Header
 */
function Header() {
  //Returns the container for the Header of the website
  return (
    <header className="mainHeader">
      <div className="mainHeader__logoWrapper">
        <img
          src={Logo}
          alt="Logo"
          className="mainHeader__logoWrapper-logoImg"
        />
      </div>
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
          <button className="mainHeader__uploadWrapper-uploadBtn">
            UPLOAD
          </button>
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
