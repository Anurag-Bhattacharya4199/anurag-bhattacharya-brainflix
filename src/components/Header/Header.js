import "./Header.scss";
import Logo from "../../assets/images/logo/BrainFlix-logo.svg";
import ProfilePic from "../../assets/images/Mohan-muruge.jpg";

function Header() {
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

export default Header;
