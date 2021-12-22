import "./AllArticles.css";
import ArticleCard from "./ArticleCard";
import ArticleErrorNotice from "./ArticleErrorNotice";

import { useState, useEffect } from "react";
import { getAllArticles } from "../../services/articlesService";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   onSnapshot(collection(db, "articles"), (snapshot) => {
  //     setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // }, []);

  useEffect(() => {
    getAllArticles().then((x) => setArticles(x));
  }, []);

  return (
    <div className="all-articles-container">
      <h1 className="mb-3 col-md-8">All Articles</h1>
      {articles.length > 0 
      ? (
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>) 
        : (<ArticleErrorNotice />)}
    </div>
  );
};

export default AllArticles;
