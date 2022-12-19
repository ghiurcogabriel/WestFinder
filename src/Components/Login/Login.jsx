import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-section">
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <div className="button-form">
              <button type="submit" id="submit" href="">
                Login
              </button>
              <div id="register">
                Don't have an account? <Link to='/register'> Create new account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
