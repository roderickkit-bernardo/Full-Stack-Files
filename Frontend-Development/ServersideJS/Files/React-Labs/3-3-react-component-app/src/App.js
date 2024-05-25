// Developer: Roderick Bernardo
// Purpose: React component demo

// Import CSS styles
import "bulma/css/bulma.min.css";

// Import component
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
