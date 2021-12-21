const AddArticle = () => {
  return (

    <div className="mx-auto" style={{ width: "500px", padding: "50px" }}>
        <h2 className="add-article-title">Add New Article</h2>
      <div className="mb-3">
        <label htmlFor="article-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="article-title"
          name="article-title"
          placeholder="Article title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="article-author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="article-author"
          name="article-author"
          placeholder="Article author"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="article-image" className="form-label">
          Image Url
        </label>
        <input
          type="url"
          className="form-control"
          id="article-image"
          name="article-image"
          placeholder="Enter valid image url"
        />
      </div>
      <div className="mb-3 input-text">
        <label htmlFor="article-content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="article-content"
          name="article-content"
          placeholder="Enter the article contents here"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddArticle;
