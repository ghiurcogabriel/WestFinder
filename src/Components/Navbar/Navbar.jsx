import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { authUser } from "../../Firebase/Config";

// import { logOut } from "../../Firebase/Methods";
import {useLogout} from '../../hooks/useLogout';

import "./Navbar.css";
import CartNum from "../../Pages/Cart/CartNum";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Navbar = () => {
  const [user] = useAuthState(authUser);
  console.log(user);
  const { logout } = useLogout();

  return (
    <nav className="navbar">
      <div className="left">
        <h1>
          <Link to="/">WestFinder</Link>
        </h1>
      </div>

      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </label>
        <ul className="list">
          <li>
            <NavLink to="./jackets" className={activeLink}>
              Jackets
            </NavLink>
          </li>
          <li>
            <NavLink to="./pants" className={activeLink}>
              Pants
            </NavLink>
          </li>
          <li>
            <NavLink to="/outdor" className={activeLink}>
              Outdoor
            </NavLink>
          </li>

          {!user && (
            <div style={{ display: "flex" }}>
              <li>
                <NavLink to="./Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="./register">Sign Up</NavLink>
              </li>
            </div>
          )}
          {user && (
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "white" }}>Logged in as {user?.displayName}</p>
              <button
                style={{
                  height: "35px",
                  width: "75px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "15px",
                  cursor: "pointer",
                }}
                onClick={logout}
              >
                Log Out
              </button>
              <button
                style={{
                  height: "35px",
                  width: "75px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "15px",
                  cursor: "pointer",
                }}
              >
                Admin
              </button>
            </div>
          )}
          <div className="cart-icon">
            <CartNum />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
