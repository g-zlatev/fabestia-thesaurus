import { useState, useEffect } from "react";
import { useContext } from "react";
import {
  getOwnArticles,
} from "../../services/articlesService";

import "./AllArticles.css";
import ArticleCard from "./ArticleCard";
import ArticleErrorNotice from "./ArticleErrorNotice";
import { AuthContext } from "../../contexts/AuthContext";

const MyArticles = () => {
  const { userInfo } = useContext(AuthContext);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getOwnArticles(userInfo.uid, "dateAdded").then((x) => setArticles(x));
  }, [userInfo.uid]);

  // console.log(articles);

  return (
    <div className="all-articles-container">
      {articles.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      ) : (
        <ArticleErrorNotice />
      )}
    </div>
  );
};

export default MyArticles;
