// Developer: Roderick Bernardo
// Purpose: Custom hook demo

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
    };

    fetchData();

    return () => {};
  }, [url]);

  return data;
}

export default useFetch;
