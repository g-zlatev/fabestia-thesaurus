function IntroItem(props) {
  return (
    <div
      className="intro-item"
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <div className="caption">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a className="button white transparent" href="#">
          Read More
        </a>
      </div>

      <div className="photocaption">
        <h4>
          Author: <a href="#">{props.author}</a>
        </h4>
      </div>
    </div>
  );
}

export default IntroItem;
