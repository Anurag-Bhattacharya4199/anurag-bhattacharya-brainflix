import { Link } from "react-router-dom";
import "./ErrorPage.scss";

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

export default ErrorPage;
