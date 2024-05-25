// Developer: Roderick Bernardo
// Purpose: React props demo

// Using default values
function Footer({
  footerData = `© 2024 Simple Page Layout. All rights reserved. Footer.js::default value.`,
}) {
  return (
    <footer>
      <p>{footerData}</p>
    </footer>
  );
}

export default Footer;
