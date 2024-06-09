// Developer: Roderick Bernardo
// Purpose: React quiz app

import { useState, useEffect } from "react";

function useFetch(url) {
  const useFetchResponse = {
    data: [],
    loading: false,
    error: false,
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [url]);

  useFetchResponse.data = data;
  useFetchResponse.loading = loading;
  useFetchResponse.error = error;

  return useFetchResponse;
}

export default useFetch;
