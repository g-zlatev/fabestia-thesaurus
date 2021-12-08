import NewsMasonryArticleBig from "./NewsMasonryArticleBig";
import NewsMasonryArticleSmall from "./NewsMasonryArticleSmall";

function NewsMasonry() {
  return (
    <section className="row section">
      <div className="row-content buffer even clear-after">
        <div className="section-title">
          <h3>Latest Articles</h3>
        </div>
        <div className="grid-items blog-section masonry-style preload">
          
          <NewsMasonryArticleBig key='1'/>

          <NewsMasonryArticleSmall key='2'/>
          <NewsMasonryArticleSmall key='3'/>
          <NewsMasonryArticleSmall key='4'/>
          <NewsMasonryArticleSmall key='5'/>

          <NewsMasonryArticleBig key='6'/>
          
          <div className="shuffle-sizer three"></div>
        </div>

        <div className="more-btn">
          <a className="button transparent aqua" href="/collection">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}


export default NewsMasonry;