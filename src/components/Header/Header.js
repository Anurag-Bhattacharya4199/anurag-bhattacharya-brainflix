import "./Header.scss";
import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import ProfilePic from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__brainFlixLogoWrapper">
        <img
          src={BrainFlixLogo}
          alt="Main Logo"
          className="header__brainFlixLogoWrapper-logo"
        />
      </div>
      <div className="header__mainNavigation">
        <div className="header__search">
          <input className="header__searchInput" placeholder="Search"></input>
          <div className="header__profilepicWrapper">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="header__profilePic"
            ></img>
          </div>
        </div>
        <div className="header__upload">
          <button className="header__uploadButton">UPLOAD</button>
          <div className="header__uploadProfilePicWrapper">
            <img
              src={ProfilePic}
              alt="Profile Pic"
              className="header__profilePic"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
