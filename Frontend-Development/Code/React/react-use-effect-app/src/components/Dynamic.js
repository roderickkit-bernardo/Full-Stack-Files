// Developer: Roderick Bernardo
// Purpose: React useEffect demo

import { useState, useEffect } from "react";

function Dynamic() {
  const divStyle = `gap-4 p-4 d-flex flex-column flex-md-row py-md-5 align-items-center justify-content-center`;
  const BASE_REST_URL = "https://jsonplaceholder.typicode.com";
  const [data, setData] = useState([]);
  const [resource, setResource] = useState("posts");

  useEffect(() => {
    console.log("Entering useEffect hook");
    const fetchData = async () => {
      const response = await fetch(`${BASE_REST_URL}/${resource}`);
      const responseJson = await response.json();
      console.log(`${resource}: ${responseJson.length} records`);
      setData(responseJson);
    };

    fetchData();

    // Optional
    return () => {
      // Clean up method
      console.log("Exiting useEffect hook");
    };
  }, [resource]);

  const resources = ["posts", "comments", "albums", "photos", "todos", "users"];
  const changeHandler = (event) => {
    setResource(event.target.value);
  };

  return (
    <div className={divStyle}>
      <select onChange={changeHandler}>
        {resources.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      {resource}: {data.length} records
    </div>
  );
}

export default Dynamic;
