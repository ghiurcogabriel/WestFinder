import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" /> <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="button-form">
            <a id="submit" href="">
              Submit
            </a>
            <div id="register">
              Don't have an account ? <a href=""> Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
