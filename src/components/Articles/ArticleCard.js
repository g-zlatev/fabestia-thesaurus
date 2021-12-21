import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, userId }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={article.bgImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.text}</p>
          <Link to={`details/${article.id}`}>
            <button type="button" className="btn btn-outline-info">
              Details
            </button>
          </Link>
          {userId && (
            <Link to={`edit/${article.id}`}>
              <button type="button" className="btn btn-outline-info ms-3">
                Edit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
