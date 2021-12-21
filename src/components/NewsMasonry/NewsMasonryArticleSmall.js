import { Link } from "react-router-dom";

function NewsMasonryArticleSmall({ article }) {
  let shortenDesc = article.text.slice(0, 100) + "... Read more";

  return (
    <article className="item column three masonry-article-card">
      <Link to={`/articles/details/${article.id}`}>
        <figure>
          <img
            style={{
              objectFit: "contain",
              height: "230px",
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
            <h5 className="meta-post">{article.author}</h5>
            <h2>{article.title}</h2>
            <p>{shortenDesc}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default NewsMasonryArticleSmall;
