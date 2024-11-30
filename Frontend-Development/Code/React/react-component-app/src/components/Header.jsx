function Header() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item is-size-1" href="#fake">
          Header text...
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary is-outlined" href="#fake">
              Link 1
            </a>
            <a className="button is-info is-outlined" href="#fake">
              Link 2
            </a>
            <a className="button is-warning is-outlined" href="#fake">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
