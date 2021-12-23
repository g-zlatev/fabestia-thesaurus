import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import "./ArticleDetails.css";
import {
  getOneById,
  deleteArticle,
  incrementParam,
} from "../../services/articlesService";
import { AuthContext } from "../../contexts/AuthContext";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    getOneById(articleId).then((x) =>
      setArticle({
        ...x,
        time: new Date(x.dateAdded.seconds * 1000).toLocaleString("en-GB"),
      })
    );
  }, [articleId, article]);

  const onLikeClick = () => {
    incrementParam(articleId, 1).then(() => {});
  };

  const onArticleDelete = () => {
    deleteArticle(articleId).then(() => navigate("/"));
  };

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
          <p className="card-text">
            <small className="text-muted">Likes: {article.likes}</small>
          </p>
        </div>
      </div>
      <div className="details-page-button-wrapper">
        {article.userId === userInfo.uid ? (
          <>
            <Link to={`/articles/edit/${articleId}`}>
              <button type="button" className="btn btn-warning">
                Edit Article
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onArticleDelete}
            >
              Delete Article
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-outline-success ms-3"
            onClick={onLikeClick}
          >
            Like Article
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
