import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSingUp } from "../../hooks/useSignUp";
import "./Register.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { authUser } from "../../Firebase/Config";
// import { auth, registerWithEmailAndPassword } from "../../Firebase/Methods";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading] = useAuthState(useSingUp);
  const history = useNavigate();
  const [user] = useAuthState(authUser);

  const { signup, isPending, error } = useSingUp();

  const register = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    
  };

  useEffect(() => {
    if(user) history("/");
  })

  return (
    <div className="register-section">
      <div className="register-container">
        <div className="register-box">
          <h2>Register</h2>
          <form onSubmit={register}>
            <div className="user-box">
              <input
                type="text"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
              />
              <label>Your Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label>Password</label>
            </div>
            <div className="button-form">
              {!isPending && <button id="submit">Sign Up</button>}
              {isPending && (
                <button id="submit" disabled>
                  Loading
                </button>
              )}
              {error && <p>{error}</p>}
              <div id="register">
                Or <Link to="/login"> Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
