// Developer: Roderick Bernardo
// Purpose: Custom hook demo

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useFetch from "./hooks/useFetch";
import "bootstrap/dist/css/bootstrap.css";
const divStyle =
  "gap-4 p-4 d-flex flex-column align-items-center justify-content-center";

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const networkStatusResult = useNetworkStatus();
  const fetchResultV1 = useFetch(`${BASE_URL}/users`);
  const fetchResultV2 = useFetch(`${BASE_URL}/albums`);

  return (
    <>
      <div className={divStyle}>
        <h1 className="text-center">Custom Hooks</h1>

        <h1 className="text-center">
          useNetworkStatus:{" "}
          {networkStatusResult ? (
            <FaThumbsUp className="mb-2" color="green"></FaThumbsUp>
          ) : (
            <FaThumbsDown className="mb-2" color="red"></FaThumbsDown>
          )}
        </h1>
        <h1>useFetchV1: {fetchResultV1.length} users</h1>
        <h1>useFetchV2: {fetchResultV2.length} albums</h1>
      </div>
    </>
  );
}

export default App;
