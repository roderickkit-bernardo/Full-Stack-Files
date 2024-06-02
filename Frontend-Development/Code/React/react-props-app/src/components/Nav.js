// Developer: Roderick Bernardo
// Purpose: React props demo

function Nav(props) {
  // Showing how to access prop values with an index
  // Better option is to use a map
  return (
    <nav>
      <ul>
        <li>
          <a href={`#${props.navData[0]}`}>{props.navData[0]}</a>
        </li>
        <li>
          <a href={`#${props.navData[1]}`}>{props.navData[1]}</a>
        </li>
        <li>
          <a href={`#${props.navData[2]}`}>{props.navData[2]}</a>
        </li>
        <li>
          <a href={`#${props.navData[3]}`}>{props.navData[3]}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
