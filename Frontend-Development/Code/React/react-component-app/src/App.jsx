// Developer: Roderick Bernardo
// Purpose: React component demo

import "bulma/css/bulma.min.css";
// Different ways to import and export JSX components
// export default Header;
import Header from "./components/Header";
// Named export { Content };
import { Content } from "./components/Content";
// Named export function Footer()
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
