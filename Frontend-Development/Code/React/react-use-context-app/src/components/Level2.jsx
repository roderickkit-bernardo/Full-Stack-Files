// Developer: Roderick Bernardo
// Purpose: React useContext demo

import Level3 from "./Level3";
import { useContext } from "react";
import { DataContext } from "./DataContext";

function Level2() {
  const [dataContext, setDataContext] = useContext(DataContext);
  const changeHandler = (event) => {
    setDataContext(event.target.value);
  };

  return (
    <>
      <div className="text-white mb-3 p-3 bg-success">
        <label htmlFor="level2Input" className="form-label">
          Level2 Input
        </label>
        <input
          type="text"
          value={dataContext}
          onChange={changeHandler}
          className="form-control"
          id="level2Input"
        />
      </div>
      <Level3></Level3>
    </>
  );
}
export default Level2;
