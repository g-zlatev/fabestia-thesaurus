import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getOrderedArticles } from "../../services/articlesService";

import "./NewsMasonry.css";
import NewsMasonryArticleBig from "./NewsMasonryArticleBig";
import NewsMasonryArticleSmall from "./NewsMasonryArticleSmall";

function NewsMasonry() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    getOrderedArticles("dateAdded", 3).then((x) => setArticle(x));
  }, []);

  // console.log(articles);

  return (
    <section className="row section">
      <div
        className="row-content buffer even clear-after"
        style={{ maxWidth: "80em" }}
      >
        <div className="section-title">
          <h3>Latest Articles</h3>
        </div>
        <div className="grid-items blog-section masonry-style">
          {/* {articles.map((x) => (
            <NewsMasonryArticleSmall key={x.id} article={x} />
          ))} */}

          {articles.map((x, index) =>
            index === 0 || index === 5 ? (
              <NewsMasonryArticleBig key={x.id} article={x} />
            ) : (
              <NewsMasonryArticleSmall key={x.id} article={x} />
            )
          )}

          <div className="shuffle-sizer three"></div>
        </div>

        <div className="more-btn">
          <Link className="button transparent aqua" to="/articles">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsMasonry;
