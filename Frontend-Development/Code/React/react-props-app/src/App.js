// Developer: Roderick Bernardo
// Purpose: React props demo

import "./css/styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  // Pass a string prop
  const headerData = "Welcome to My Website";

  // Pass an array prop
  const navData = ["Home", "About", "Services", "Contact"];

  // Pass an object prop
  const mainContentData = {
    title: "Main Content Area",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo in convallis tempor. Proin rutrum felis in diam pharetra dapibus. Aliquam sagittis faucibus ipsum quis laoreet. Mauris euismod viverra nulla, at eleifend ante bibendum non. In vestibulum, ipsum eu tempor lobortis, enim erat suscipit nisl, nec pellentesque tellus arcu efficitur ipsum. Mauris non accumsan nisl, at tempus erat. Aenean sit amet consequat purus. Duis non nisi suscipit, maximus justo a, mattis lorem. Aliquam sit amet feugiat metus. Phasellus volutpat lobortis vehicula. Vivamus id enim sed elit commodo tincidunt. Nam cursus tincidunt volutpat. Nulla facilisi. Nulla in dui id lorem ornare maximus.",
    p2: "Phasellus ultricies malesuada sem, sed pellentesque nunc vehicula euismod. Donec fermentum leo eu est aliquam cursus. Vivamus commodo aliquam finibus. Phasellus molestie rhoncus mauris sed porttitor. Integer pellentesque mattis turpis in pretium. Nulla gravida nisi quis fringilla lacinia. Mauris vel tempor risus, eu hendrerit justo. Duis aliquet mauris ante, sit amet bibendum sapien suscipit imperdiet. Integer risus magna, tincidunt sed magna non, hendrerit dictum nulla. Morbi porttitor faucibus pharetra. Fusce quis eleifend justo. Nullam efficitur blandit aliquam.",
    p3: "Praesent lectus leo, pulvinar sit amet ipsum vitae, efficitur placerat neque. Nullam neque magna, dictum eu varius sit amet, tincidunt ut purus. Nulla dictum magna eu varius pulvinar. Duis mollis neque ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur viverra sit amet urna congue pretium. Sed a mauris ex. Etiam in fringilla risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum erat sem, tempus sit amet dolor id, lobortis euismod velit. Fusce eleifend lectus nec dolor egestas, in elementum erat placerat. Aenean nibh erat, commodo vitae porta eu, porttitor eu felis. Cras orci lectus, rutrum nec placerat sit amet, lobortis sed erat.",
  };

  // Pass a string prop
  const footerData = `© 2024 Simple Page Layout. All rights reserved. App.js::props value.`;

  return (
    <>
      <Header headerData={headerData} />
      <Nav navData={navData} />
      <MainContent mainContentData={mainContentData} />
      <Footer footerData={footerData} />
      {/* This should also work because there is a default value */}
      <Footer />
    </>
  );
}

export default App;
