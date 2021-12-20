import "./AllArticles.css";
import ArticleCard from "./ArticleCard";

import {useState, useEffect} from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "articles"), (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="all-articles-container">
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
          {articles.map((article => <ArticleCard key={article.id} article={article}/>))}
        
      </div>
    </div>
  );
};

export default AllArticles;
