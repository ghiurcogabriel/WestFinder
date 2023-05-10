import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);
  const [id, setId] = useState(null);

 useEffect(() => {
    setId(Math.floor(Math.random() * 1000000));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (seconds === 0 || seconds < 0) {
    navigate("/");
  }

  return (
    <div style={{ marginTop: "10%", height: "90%", width: "100%", textAlign: 'center', gap: '20px'}}>
      <h1 style={{ fontSize: "38px" }}>Thank you for your order</h1>
      <h3 style={{ fontSize: "24px" }}>
        You will be notified when the courier will arive.
      </h3>
      <p>Your order id is: {id}</p>
      <p>
        You will be redirected to <Link to="/">Home Page</Link> in {seconds}{" "}
        seconds
      </p>
    </div>
  );
};

export default OrderPlaced;
