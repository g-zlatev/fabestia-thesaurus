import {Link} from "react-router-dom";

function IntroItem({ item }) {
  return (
    <div id="intro-wrap">
      <div
        id="intro"
        data-autoplay="5000"
        data-navigation="true"
        data-pagination="true"
        data-transition="fadeUp"
      >
        <div
          className="intro-item"
          style={{ backgroundImage: `url(${item.bgImage})` }}
        >
          <div className="caption">
            <div className="intro-text-wrapper">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link className="button white transparent csstransitions" to={`/articles/details/${item.id}`}>
                Read More
              </Link>
            </div>
          </div>
          <div className="photocaption">
            <h4>
              Author: <Link to="/">{item.author}</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroItem;
