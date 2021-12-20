import "./AllArticles.css";
import ArticleCard from "./ArticleCard";

import { useState, useEffect } from "react";
import { getData } from "../../services/getDataService";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);

  //TODO: Change logic to get only own articles
  useEffect(() => {
    getData().then((x) => setArticles(x));
  }, []);

  return (
    <div className="all-articles-container">
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MyArticles;
