import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [loadingDelay, setLoadingDelay] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoadingDelay(false);
    }, 10000);

    return () => {
      clearTimeout(timeId);
    };
  });

  if (!loadingDelay) {
    return null;
  }

  return (
    <>
      {loadingDelay && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
