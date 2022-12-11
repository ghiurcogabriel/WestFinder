import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
// import Login from '../Login/Login'

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>Navbar</h1>
      </div>

      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </label>
        <ul className="list">
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='./Login'>Login</Link>
          </li>
          <li>
            <Link to='/'>Servixes</Link>
          </li>
          <li>
            <Link to='/'>Linkbout Us</Link>
          </li>
          <li>
            <Link to='/'>ContLinkct Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;