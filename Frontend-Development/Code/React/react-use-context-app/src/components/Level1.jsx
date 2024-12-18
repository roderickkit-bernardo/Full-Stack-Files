// Developer: Roderick Bernardo
// Purpose: React useContext demo

import Level2 from "./Level2";
import { useContext } from "react";
import { DataContext } from "./DataContext";

const divStyle =
  "gap-4 p-4 d-flex flex-column flex-md-row py-md-5 align-items-center justify-content-center";

function Level1() {
  const [dataContext, setDataContext] = useContext(DataContext);
  const changeHandler = (event) => {
    setDataContext(event.target.value);
  };

  return (
    <>
      <h1 className="p-4 text-center">useContext::AppReadAndUpdate</h1>
      <div className={divStyle}>
        <div className="text-white mb-3 p-3 bg-primary">
          <label htmlFor="level1Input" className="form-label">
            Level1 Input
          </label>
          <input
            type="text"
            value={dataContext}
            onChange={changeHandler}
            className="form-control"
            id="level1Input"
          />
        </div>
        <Level2></Level2>
      </div>
    </>
  );
}
export default Level1;
