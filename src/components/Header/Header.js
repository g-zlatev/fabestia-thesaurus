import './Header.css'

function Header() {
  return (
    <header role="banner" className="transparent light">
      <div className="row">
        <div className="nav-inner row-content buffer-left buffer-right even clear-after">
          <div id="brand">
            <h1 className="reset">
              <a href="home-01.html">Fabestia</a>
            </h1>
          </div>

          <a id="menu-toggle" href="#">
            <i className="fa fa-bars fa-lg"></i>
          </a>
          <nav>
            <ul className="reset" role="navigation">
              <li className="menu-item">
                <a href="home-01.html">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="home-01.html">Generic Home Page</a>
                  </li>
                  <li>
                    <a href="home-02.html">App Showcase</a>
                  </li>
                  <li>
                    <a href="home-03.html">App Showcase Alternative</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="works-4-columns.html">Works</a>
                <ul className="sub-menu">
                  <li>
                    <a href="works-4-columns.html">Four Columns Grid Style</a>
                  </li>
                  <li>
                    <a href="works-3-columns.html">Three Columns Grid Style</a>
                  </li>
                  <li>
                    <a href="works-4-columns-alternative.html">
                      Four Columns Mosaic Style
                    </a>
                  </li>
                  <li>
                    <a href="works-3-columns-alternative.html">
                      Three Columns Mosaic Style
                    </a>
                  </li>
                  <li>
                    <a href="works-4-columns-lightbox.html">Lightbox Gallery</a>
                  </li>
                  <li>
                    <a href="single-work-post.html">Single Work Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="blog-4-columns-masonry.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-4-columns-masonry.html">Four Columns Grid</a>
                  </li>
                  <li>
                    <a href="blog-list-sidebar.html">List Style with Sidebar</a>
                  </li>
                  <li>
                    <a href="single-blog-post.html">Single Post</a>
                  </li>
                  <li>
                    <a href="single-blog-post-sidebar.html">
                      Single Post with Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="resume.html">Resume</a>
              </li>
              <li className="menu-item">
                <a href="#">Features</a>
                <ul className="sub-menu">
                  <li>
                    <a href="search.html">Search Page</a>
                  </li>
                  <li>
                    <a href="no-results.html">Search Page - No Results</a>
                  </li>
                  <li>
                    <a href="page-not-found.html">404 - Page Not Found</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Sub Sub Menu 01</a>
                      </li>
                      <li>
                        <a href="#">Sub Sub Menu 02</a>
                      </li>
                      <li>
                        <a href="#">Sub Sub Menu 03</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


export default Header;