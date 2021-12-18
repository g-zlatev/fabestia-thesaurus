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
              <a className="button white transparent csstransitions" href="/">
                Read More
              </a>
            </div>
          </div>
          <div className="photocaption">
            <h4>
              Author: <a href="/">{item.author}</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroItem;
