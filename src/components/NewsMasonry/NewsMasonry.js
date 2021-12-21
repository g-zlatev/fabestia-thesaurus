import "./NewsMasonry.css";
import NewsMasonryArticleBig from "./NewsMasonryArticleBig";
import NewsMasonryArticleSmall from "./NewsMasonryArticleSmall";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, getDocs, limit } from "firebase/firestore";
import db from "../../firebase";

function NewsMasonry() {
  const [articles, setArticle] = useState([]);

  //  useEffect(() => {
  //   onSnapshot(collection(db, "articles"), (snapshot) => {
  //     setArticle(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // }, []);

  useEffect(() => {
    (async function () {
      const q = query(collection(db, "articles"), limit(3));
      const querySnapshot = await getDocs(q);
      setArticle(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
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
