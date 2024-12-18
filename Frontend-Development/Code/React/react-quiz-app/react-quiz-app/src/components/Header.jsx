// Developer: Roderick Bernardo
// Purpose: React quiz app

import Authenticator from "../lib/Authenticator";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logoutHandler = (event) => {
    Authenticator.logout();
    // navigate("/Login", { replace: true });
    navigate("/Login");
    navigate(0);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="is-size-1 navbar-item" href="/">
            Quizzes R Us
          </a>
        </div>
        {/* Generate the logout button only when the user is authentcated */}
        {!Authenticator.isAuthenticated() ? null : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button">
                  <Link to="/Quiz">Quiz</Link>
                </button>

                {Authenticator.isAdmin() === "y" ? (
                  <button className="button">
                    <Link to="/Admin">Admin</Link>
                  </button>
                ) : null}

                <button className="button" onClick={logoutHandler}>
                  Logout: {Authenticator.getUserName()}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default Header;
