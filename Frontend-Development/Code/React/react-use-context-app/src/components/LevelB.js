// Developer: Roderick Bernardo
// Purpose: useContext demo

import { useContext } from "react";
import { DataContext } from "./DataContext";

function LevelB() {
  const dataContext = useContext(DataContext);

  return <h1 className="p-4 text-center">LevelB - {dataContext}</h1>;
}
export default LevelB;
