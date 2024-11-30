// Using default values
function Footer({
  footerData = `© 2024 Simple Page Layout. All rights reserved. From Footer.jsx::default value.`,
}) {
  return (
    <footer>
      <p>{footerData}</p>
    </footer>
  );
}

export default Footer;
