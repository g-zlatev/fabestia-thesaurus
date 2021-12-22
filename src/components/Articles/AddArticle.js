import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { createArticle } from "../../services/articlesService";
import { AuthContext } from "../../contexts/AuthContext";

const AddArticle = () => {
  const { userInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const onArticleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let author = formData.get("author");
    let imageUrl = formData.get("imageUrl");
    let content = formData.get("content");
    let dateAdded = new Date();
    let userEmail = userInfo.email;
    let userId = userInfo.uid;

    createArticle(title, author, imageUrl, content, dateAdded, userId, userEmail)
      .then(() => navigate("/"))
      .catch((err) => {
        window.alert(err.message);
      });
  };

  return (
    <form
      className="mx-auto"
      onSubmit={onArticleCreate}
      method="POST"
      style={{ width: "500px", padding: "50px" }}
    >
      <h2 className="add-article-title">Add New Article</h2>
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

export default AddArticle;
