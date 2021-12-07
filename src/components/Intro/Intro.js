import './Intro.css';

function Intro() {
  return (
    <div id="intro-wrap">
      <div
        id="intro"
        className="preload darken"
        data-autoplay="5000"
        data-navigation="true"
        data-pagination="true"
        data-transition="fadeUp"
      >
        <div
          className="intro-item"
          style={{
            backgroundImage:
              "url(http://placehold.it/1800x600/ddd/fff&text=Beetle%20image)",
          }}
        >
          <div className="caption">
            <h2>Beetle</h2>
            <p>HTML5 template for landing page, blog and resume</p>
            <a className="button white transparent" href="#">
              Read More
            </a>
          </div>

          <div className="photocaption">
            <h4>
              Shot by{" "}
              <a href="http://dribbble.com/JustinMezzell">Justin Mezzell</a>
            </h4>
          </div>
        </div>

        <div
          className="intro-item"
          style={{
            backgroundImage:
              "url(http://placehold.it/1800x600/ddd/fff&text=Beetle%20image)",
          }}
        >
          <div className="caption">
            <h2>Workspace</h2>
            <p>We love to work inside dark rooms</p>
            <a className="button white transparent" href="#">
              Read More
            </a>
          </div>

          <div className="photocaption">
            <h4>
              Shot by{" "}
              <a href="http://dribbble.com/shots/883285-my-workspace">
                Eddie Lobanovskiy
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
