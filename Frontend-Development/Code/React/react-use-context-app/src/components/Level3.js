// Developer: Roderick Bernardo
// Purpose: React useContext demo

import { useContext } from "react";
import { DataContext } from "./DataContext";

function Level3() {
  const [dataContext, setDataContext] = useContext(DataContext);
  const changeHandler = (event) => {
    setDataContext(event.target.value);
  };

  return (
    <div className="text-white mb-3 p-3 bg-danger">
      <label htmlFor="level3Input" className="form-label">
        Level3 Input
      </label>
      <input
        type="text"
        value={dataContext}
        onChange={changeHandler}
        className="form-control"
        id="level3Input"
      />
    </div>
  );
}
export default Level3;
