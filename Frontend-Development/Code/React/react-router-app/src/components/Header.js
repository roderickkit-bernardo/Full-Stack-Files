// Developer: Roderick Bernardo
// Purpose: React router demo

import { Link } from "react-router-dom";
import headerLogo from "../images/headerLogo.png";

function Header(props) {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* TODO: This needs to be updated a Link avoid a page refresh */}
          <a className="navbar-item" href="/">
            <img src={headerLogo} alt="Header Logo" />
            &nbsp;&nbsp;
            <h1>Frontend Development - {props.version}</h1>
          </a>
        </div>
      </nav>
      <div className="tabs is-boxed">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Lectures">Lectures</Link>
          </li>
          <li>
            <Link to="/Labs">Labs</Link>
          </li>
          <li>
            <Link to="/Quizzes">Quizzes</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
