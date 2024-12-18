// Developer: Roderick Bernardo
// Purpose: React useEffect demo

import Static from "./components/Static";
import Dynamic from "./components/Dynamic";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <h1 className="text-center mt-4">
      Uncomment the component to see the different scenarios
    </h1>
  );

  return <Static></Static>;
  return <Dynamic></Dynamic>;
}
export default App;
