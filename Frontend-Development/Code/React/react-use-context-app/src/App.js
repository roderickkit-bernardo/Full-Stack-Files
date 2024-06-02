import "bootstrap/dist/css/bootstrap.css";
import { DataContext } from "./components/DataContext";
import LevelA from "./components/LevelA";

function App() {
  return (
    <DataContext.Provider value="Context Value...">
      <LevelA></LevelA>
    </DataContext.Provider>
  );
}
export default App;
