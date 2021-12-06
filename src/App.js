import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="page">
      <Header />
      <Intro />

      <main role="main">
        <div id="main">
          <section className="row section">
            <div className="row-content buffer even clear-after">
              <div className="column four">
                <div className="small-icon red">
                  <i className="icon icon-paperfly"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Landing page</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="column four">
                <div className="small-icon red">
                  <i className="icon icon-diamond"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Portfolio</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="column four last">
                <div className="small-icon red">
                  <i className="icon icon-crown"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Resume</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="column four">
                <div className="small-icon red">
                  <i className="icon icon-tablet"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Responsive</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="column four">
                <div className="small-icon red">
                  <i className="icon icon-megaphone"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Blog</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="column four last">
                <div className="small-icon red">
                  <i className="icon icon-multiview"></i>
                </div>
                <div className="small-icon-text clear-after">
                  <h4>Layer CSS</h4>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="row section">
            <div className="row-content buffer even clear-after">
              <div className="section-title">
                <h3>Latest News</h3>
              </div>
              <div className="grid-items blog-section masonry-style preload">
                <article className="item column six">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Interior design</h5>
                        <h2>A confortable desk</h2>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="item column three">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Relax, Hobbies</h5>
                        <h2>How I spend my time</h2>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="item column three">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Holidays</h5>
                        <h2>Snow &amp; silence</h2>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="item column three">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Music, Headphones</h5>
                        <h2>5 Hi-Fi headphones</h2>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="item column three">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Web Design</h5>
                        <h2>Build awesome layouts</h2>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="item column six">
                  <a href="#">
                    <figure>
                      <img
                        src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
                        alt=""
                      />
                      <span className="blog-overlay">
                        <i className="icon icon-doc"></i>
                      </span>
                    </figure>
                    <div className="blog-excerpt">
                      <div className="blog-excerpt-inner">
                        <h5 className="meta-post">Photography, Instagram</h5>
                        <h2>We are all made of stars</h2>
                      </div>
                    </div>
                  </a>
                </article>
                <div className="shuffle-sizer three"></div>
              </div>

              <div className="more-btn">
                <a className="button transparent aqua" href="#">
                  Read all News
                </a>
              </div>
            </div>
          </section>

          <section
            className="row section text-light"
            style={{ backgroundColor: "#4FC1E9" }}
          >
            <div className="row-content buffer even clear-after">
              <div
                className="testimonial-slider centertxt"
                data-autoplay="5000"
                data-pagination="true"
                data-transition="fade"
                data-autoheight="false"
              >
                <div className="quote">
                  <p>
                    "It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout."
                  </p>
                  <div className="author">John Lennon</div>
                </div>

                <div className="quote">
                  <p>
                    "Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum'.."
                  </p>
                  <div className="author">Fabrizio De Andr&egrave;</div>
                </div>

                <div className="quote">
                  <p>
                    "There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration."
                  </p>
                  <div className="author">B.B. King</div>
                </div>
              </div>
            </div>
          </section>

          <section className="row section">
            <div className="row-content buffer even clear-after">
              <div className="column three">
                <div className="count-item">
                  <div className="small-icon red">
                    <i className="icon icon-leaf"></i>
                  </div>
                  <div
                    className="count-number"
                    data-from="0"
                    data-to="1284"
                    data-speed="1000"
                    data-refresh-interval="25"
                  ></div>
                  <div className="count-subject">Active projects</div>
                </div>
              </div>
              <div className="column three">
                <div className="count-item">
                  <div className="small-icon red">
                    <i className="icon icon-heart"></i>
                  </div>
                  <div
                    className="count-number"
                    data-from="0"
                    data-to="28903"
                    data-speed="1500"
                    data-refresh-interval="25"
                  ></div>
                  <div className="count-subject">Users who love them</div>
                </div>
              </div>
              <div className="column three">
                <div className="count-item">
                  <div className="small-icon red">
                    <i className="icon icon-tshirt"></i>
                  </div>
                  <div
                    className="count-number"
                    data-from="0"
                    data-to="326"
                    data-speed="2000"
                    data-refresh-interval="25"
                  ></div>
                  <div className="count-subject">T-Shirts &amp; Gadgets</div>
                </div>
              </div>
              <div className="column three last">
                <div className="count-item">
                  <div className="small-icon red">
                    <i className="icon icon-graph"></i>
                  </div>
                  <div
                    className="count-number"
                    data-from="0"
                    data-to="58802"
                    data-speed="2500"
                    data-refresh-interval="25"
                  ></div>
                  <div className="count-subject">Everyday visitors</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer role="contentinfo">
        <div className="row">
          <div className="row-content buffer clear-after">
            <section id="top-footer">
              <div className="widget column three">
                <h4>Menu</h4>
                <ul className="plain">
                  <li>
                    <a href="home-01.html">Home</a>
                  </li>
                  <li>
                    <a href="works-3-columns.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="blog-4-columns-masonry.html">Blog</a>
                  </li>
                  <li>
                    <a href="resume.html">Resume</a>
                  </li>
                  <li>
                    <a href="file:///Users/pasqualevitiello/My%20Folder/Job/Envato/PR%20Themeforest/Flattie/Markup/Beetle/contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget column three">
                <h4>Archives</h4>
                <ul className="plain">
                  <li>
                    <a href="#">March 2014</a>
                  </li>
                  <li>
                    <a href="#">April 2014</a>
                  </li>
                  <li>
                    <a href="#">May 2014</a>
                  </li>
                  <li>
                    <a href="#">June 2014</a>
                  </li>
                  <li>
                    <a href="#">July 2014</a>
                  </li>
                </ul>
              </div>
              <div className="widget column three">
                <h4>Widget</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
              <div className="widget meta-social column three">
                <h4>Follow Us</h4>
                <ul className="inline">
                  <li>
                    <a href="#" className="twitter-share border-box">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook-share border-box">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest-share border-box">
                      <i className="fa fa-pinterest fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section id="bottom-footer">
              <p className="keep-left">
                &copy; 2014{" "}
                <a href="http://mokaine.com/" alt="Mokaine Lab">
                  Mokaine
                </a>
                . All Rights Reserved.
              </p>
              <p className="keep-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
