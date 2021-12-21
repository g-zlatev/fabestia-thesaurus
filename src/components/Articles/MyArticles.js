import "./AllArticles.css";
import ArticleCard from "./ArticleCard";
import ArticleErrorNotice from "./ArticleErrorNotice";

import { useState, useEffect } from "react";
import { getData } from "../../services/getDataService";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);

  //TODO: Change logic to get only own articles
  useEffect(() => {
    getData().then((x) => setArticles(x.slice(0, 2)));
  }, []);

  let uid = 1234;

  return (
    <div className="all-articles-container">
      {articles.length > 0 
      ? (
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} userId={uid}/>
          ))}
        </div>) 
        : (<ArticleErrorNotice />)}
    </div>
  );
};

export default MyArticles;