import { Link } from "react-router-dom";

import "./Header.css";

function Header(isAuthenticated, username) {
  let userNavigation = (
    <nav>
      <ul className="" role="navigation">
        <li className="menu-item">
          <Link to="/collection">Articles</Link>
        </li>
        <li className="menu-item">
          <Link to="/collection/my-articles">My Articles</Link>
          <ul className="sub-menu">
            <li>
              <Link to="/add">Add Entry</Link>
            </li>
            <li>
              <Link to="/edit">Edit Entry</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menu-item">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );

  let guestNavigation = (
    <nav>
      <ul className="" role="navigation">
        <li className="menu-item">
          <Link to="/collection">Articles</Link>
        </li>
        <li className="menu-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="menu-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className="header">
      <div className="header-wrapper">
        <div id="brand">
          <h1 className="reset">
            <Link to="/">Fabestia</Link>
          </h1>
        </div>
        {isAuthenticated.isAuthenticated ? userNavigation : guestNavigation}
      </div>
    </header>
  );
}

export default Header;
