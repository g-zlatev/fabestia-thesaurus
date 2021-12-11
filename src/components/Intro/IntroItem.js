function IntroItem({ item }) {

  return (
    <div
      className="intro-item"
      style={{
        backgroundImage: `url(${item.bgImage})`,
      }}
    >
      <div className="caption">
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <a className="button white transparent" href="/">
          Read More
        </a>
      </div>

      <div className="photocaption">
        <h4>
          Author: <a href="/">{item.author}</a>
        </h4>
      </div>
    </div>
  );
}

export default IntroItem;
