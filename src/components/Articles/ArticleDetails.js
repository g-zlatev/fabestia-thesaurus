import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ArticleDetails.css";
import { getOneById } from "../../services/articlesService";

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const [date, setDate] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    getOneById(articleId).then((x) =>
      setArticle({ ...x, time: new Date(x.dateAdded.seconds * 1000).toLocaleString("en-GB") })
    );
  }, []);

//   console.log(article);

  return (
    <div className="article-detail-container">
      <div className="card mb-3">
        <img
          src={article.bgImage}
          className="card-img-top article-details-image"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{article.title} by {article.author}</h5>
          <p className="card-text">{article.text}</p>
          <p className="card-text">
            <small className="text-muted">Added on {article.time} h</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
