// Developer: Roderick Bernardo
// Purpose: React useContext demo

import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { DataContext } from "./components/DataContext";

import Level1 from "./components/Level1";

function App() {
  const [dataContext, setDataContext] = useState("Initial value...");

  return (
    <DataContext.Provider value={[dataContext, setDataContext]}>
      <Level1></Level1>
    </DataContext.Provider>
  );
}

export default App;
