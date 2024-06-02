// Developer: Roderick Bernardo
// Purpose: React component demo

function Header() {
  const fillerLink = "#fake";
  const linkConfig = [
    { label: "Link 1", style: "button is-primary is-outlined" },
    { label: "Link 2", style: "button is-info is-outlined" },
    { label: "Link 3", style: "button is-warning is-outlined" },
  ];

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item is-size-1" href={fillerLink}>
          Header text...
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {linkConfig.map((item) => (
              <a className={item.style} href={fillerLink}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
