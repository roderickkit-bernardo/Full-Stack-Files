// Developer: Roderick Bernardo
// Purpose: Custom hook demo

import { useState, useEffect } from "react";

function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    console.log("Entering the useNetworkStatus custom hook...");

    const networkOnHandler = () => {
      setNetworkStatus(true);
    };

    const networkOffHandler = () => {
      setNetworkStatus(false);
    };

    window.addEventListener("online", networkOnHandler);
    window.addEventListener("offline", networkOffHandler);

    return () => {
      console.log("Exiting the useNetworkStatus custom hook...");
      window.removeEventListener("online", networkOnHandler);
      window.removeEventListener("offline", networkOffHandler);
    };
  }, []);

  return networkStatus;
}

export default useNetworkStatus;
