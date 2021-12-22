import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneById, editArticle } from "../../services/articlesService";

import "./ArticleDetails.css";

const EditArticle = () => {
  const navigate = useNavigate();

  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    getOneById(articleId).then((x) =>
      setArticle({
        ...x,
        time: new Date(x.dateAdded.seconds * 1000).toLocaleString("en-GB"),
      })
    );
  }, [articleId]);



  const onArticleEdit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let author = formData.get("author");
    let imageUrl = formData.get("imageUrl");
    let content = formData.get("content");
    let dateAdded = new Date();

    let art = {
        title,
        author,
        bgImage: imageUrl,
        text: content,
        dateAdded
    };

    // console.log(art);

    editArticle(articleId, art).then(
      navigate("/")
    );
  };

  return (
    <form
      className="mx-auto"
      onSubmit={onArticleEdit}
      method="POST"
      style={{ width: "500px", padding: "50px" }}
    >
      <h2 className="add-article-title">Edit Article</h2>
      <div className="mb-3">
        <label htmlFor="article-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="article-title"
          name="title"
          placeholder="Article title"
          defaultValue={article.title}
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
          name="author"
          placeholder="Article author"
          defaultValue={article.author}
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
          name="imageUrl"
          placeholder="Enter valid image url"
          defaultValue={article.bgImage}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="article-content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="article-content"
          name="content"
          placeholder="Enter the article contents here"
          defaultValue={article.text}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditArticle;
