import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ArticleDetails.css";
import { getOneById } from "../../services/articlesService";

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    getOneById(articleId).then((x) =>
      setArticle({
        ...x,
        time: new Date(x.dateAdded.seconds * 1000).toLocaleString("en-GB"),
      })
    );
  }, [articleId]);

  //   console.log(article);

  return (
    <div className="article-detail-container">
      <div className="card mb-3">
        <img
          src={article.bgImage}
          className="card-img-top img-fliud article-details-image"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {article.title} by {article.author}
          </h5>
          <p className="card-text">{article.text}</p>
          <p className="card-text">
            <small className="text-muted">Last Modified {article.time} h</small>
          </p>
        </div>
      </div>
      <div className="details-page-button-wrapper">
        <Link to={`/articles/edit/${articleId}`}>
          <button type="button" className="btn btn-warning">
            Edit Article
          </button>
        </Link>
        <Link to={`/articles/delete/${articleId}`}>
          <button type="button" className="btn btn-danger">
            Delete Article
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetails;
