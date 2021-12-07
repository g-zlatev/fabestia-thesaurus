function NewsMasonry() {
  return (
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
  );
}


export default NewsMasonry;