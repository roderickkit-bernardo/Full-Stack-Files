// Developer: Roderick Bernardo
// Purpose: React useState demo

import { useState } from "react";
import { Atom } from "lucide-react";

const sizeValues = [16, 32, 64, 128];
const strokeWidthValues = [1, 2, 3, 4, 5];

function UseStateV4() {
  const [size, setSize] = useState(16);
  const [color, setColor] = useState("#000");
  const [strokeWidth, setStrokeWidth] = useState(1);

  const sizeChangeHandler = (event) => {
    setSize(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  const strokeWidthChangeHandler = (event) => {
    setStrokeWidth(event.target.value);
  };
  return (
    <div className="container my-0 mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded shadow-md w-full">
        <h1 className="text-center text-4xl font-bold">
          Change the Lucide icon properties
        </h1>
      </div>

      <div className="flex flex-row justify-center bg-gray-100 p-4 rounded shadow-md w-full mt-4">
        <div>
          <Atom size={size} color={color} strokeWidth={strokeWidth}></Atom>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow-md w-full mt-4">
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Size:
          </label>

          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={sizeChangeHandler}
          >
            {sizeValues.map((sizeValue) => (
              <option key={sizeValue}>{sizeValue}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Color:
          </label>
          <input
            className="shadow border rounded w-full leading-tight focus:outline-none focus:shadow-outline"
            type="color"
            onChange={colorChangeHandler}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Stroke Width:
          </label>

          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={strokeWidthChangeHandler}
          >
            {strokeWidthValues.map((strokeWidthValue) => (
              <option key={strokeWidthValue}>{strokeWidthValue}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default UseStateV4;
