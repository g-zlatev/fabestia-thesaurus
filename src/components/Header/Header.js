import './Header.css'

function Header() {
  return (
    <header role="banner" className="transparent light">
      <div className="row">
        <div className="nav-inner row-content buffer-left buffer-right even clear-after">
          <div id="brand">
            <h1 className="reset">
              <a href="/">Fabestia</a>
            </h1>
          </div>

          <a id="menu-toggle" href="#">
            <i className="fa fa-bars fa-lg"></i>
          </a>
          <nav>
            <ul className="" role="navigation">
              <li className="menu-item">
                <a href="/collection">Articles</a>
              </li>
              
              <li className="menu-item">
                <a href="/my-collection">My Articles</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/add">Add Entry</a>
                  </li>
                  <li>
                    <a href="/edit">Edit Entry</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <a href="/contact">Contact</a>
              </li>
              <li className="menu-item">
                <a href="/login">Login</a>
              </li>
              <li className="menu-item">
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


export default Header;