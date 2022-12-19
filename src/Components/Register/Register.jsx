import React from "react";
import {Link} from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-section">
      <div className="register-container">
        <div className="register-box">
          <h2>Register</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>First Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Last Name</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Repeat Password</label>
            </div>
            <div className="button-form">
              <button type="submit" id="submit" href="">
                Sign Up
              </button>
              <div id="register">
                Or <Link to='/login'> Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
