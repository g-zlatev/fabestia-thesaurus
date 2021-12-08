function NewsMasonryArticleSmall() {
  return (
    <article className="item column three">
      <a href="/">
        <figure>
          <img
            src="http://placehold.it/800x600/ddd/fff&text=Beetle%20image"
            alt=""
          />
          <span className="blog-overlay">
            <i className="icon icon-doc"></i>
          </span>
        </figure>
        <div className="blog-excerpt">
          <div className="blog-excerpt-inner">
            <h5 className="meta-post">Relax, Hobbies</h5>
            <h2>How I spend my time</h2>
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}

export default NewsMasonryArticleSmall;
