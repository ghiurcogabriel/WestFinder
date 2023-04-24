import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle } from "../../Firebase/Methods";
import { authUser } from "../../Firebase/Config";
import { useLogin } from "../../hooks/useLogin";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(authUser);
  const navigate = useNavigate();
  // console.log(user);
  const { login, error } = useLogin();
  
  const signin = (e) => {
    e.preventDefault();
    login(email, password);
    
  };

  useEffect(() => {
    if (loading) {
      //loading spinner should be implemented
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div className="login-section">
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={signin}>
            <div className="user-box">
              <input
                type="text"
                name=""
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <p>{error}</p>
            <div className="button-form">
              <button type="submit" id="submit">
                Login
              </button>
              <div id="register">
                Don't have an account?{" "}
                <Link to="/register"> Create new account</Link>
              </div>
            </div>
          </form>

          <div className="line-break">
            <hr /> <span>OR</span> <hr />
          </div>
          <div className="social-login">
            <button
              type="submit"
              className="social social-g"
              onClick={signInWithGoogle}
            >
              <span>
                <FaGoogle />
              </span>
              Sign in with Google
            </button>
            <button type="submit" className="social social-f">
              <span>
                <FaFacebookF />
              </span>{" "}
              Sign in with Facebook
            </button>
          </div>
          <div className="reset-pass">
            <h2>Forgot password? You can reset you password here..</h2>
            <button type="submit" className="reset-btn">
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
