import "./ArticleCard.css";

const ArticleCard = ({article}) => {

  return (
    <div className="col">
      <div className="card">
        <img
          src={article.bgImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.text}</p>
          <button type="button" className="btn btn-outline-info">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
