// Developer: Roderick Bernardo
// Purpose: React quiz app

import Autheticator from "../lib/Autheticator";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logoutHandler = (event) => {
    Autheticator.logout();
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
        {!Autheticator.isAuthenticated() ? null : (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button" onClick={logoutHandler}>
                  Logout: {Autheticator.getToken("")}
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
