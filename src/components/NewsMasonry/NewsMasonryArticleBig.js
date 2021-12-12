function NewsMasonryArticleBig({ article }) {

  return (
    <article className="item column six">
      <a href="/">
        <figure>
          <img
            style={{
              objectFit: "cover",
              width: "400px",
              height: "400px",
            }}
            src={article.bgImage}
            alt=""
          />
          <span className="blog-overlay">
            <i className="icon icon-doc"></i>
          </span>
        </figure>
        <div className="blog-excerpt">
          <div className="blog-excerpt-inner">
            <h5 className="meta-post">{article.title}</h5>
            <h2>{article.text}</h2>
          </div>
        </div>
      </a>
    </article>
  );
}

export default NewsMasonryArticleBig;
