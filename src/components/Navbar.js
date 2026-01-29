import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <h1 className="logo">
          <span className="logo-just">Just</span>
          <span className="logo-once">Once</span>
        </h1>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resources
          </NavLink>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Privacy
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
