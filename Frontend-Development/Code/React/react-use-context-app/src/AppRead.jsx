// Developer: Roderick Bernardo
// Purpose: useContext demo

import "bootstrap/dist/css/bootstrap.css";
import { DataContext } from "./components/DataContext";
import LevelA from "./components/LevelA";

function AppRead() {
  return (
    <DataContext.Provider value="Context Value From AppRead...">
      <LevelA></LevelA>
    </DataContext.Provider>
  );
}
export default AppRead;
