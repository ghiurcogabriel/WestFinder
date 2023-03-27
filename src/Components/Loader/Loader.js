import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [loadingDelay, setLoadingDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);
  });

  return (
    <>
      {loadingDelay && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
