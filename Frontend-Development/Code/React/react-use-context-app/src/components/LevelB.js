import { useContext } from "react";
import { DataContext } from "./DataContext";

function LevelB() {
  const dataContext = useContext(DataContext);

  return <h1>LevelB - {dataContext}</h1>;
}
export default LevelB;
