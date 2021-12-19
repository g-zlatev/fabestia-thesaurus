function NewsMasonryArticleBig({ article }) {

  let shortenDesc = article.text.slice(0, 100) + "... Read more";

  return (
    <article className="item column six masonry-article-card">
      <a href="/">
        <figure>
          <img
            style={{
              objectFit: "contain",
              width: "400px",
              height: "400px",
              margin: "0 auto"
            }}
            src={article.bgImage}
            alt=""
          />
          <span className="blog-overlay">
            <i className="icon icon-doc"></i>
          </span>
        </figure>
        <div className="blog-excerpt">
          <div className="blog-excerpt-inner masonry-card-big">
            <h5 className="meta-post">{article.title}</h5>
            <h2>{shortenDesc}</h2>
          </div>
        </div>
      </a>
    </article>
  );
}

export default NewsMasonryArticleBig;
