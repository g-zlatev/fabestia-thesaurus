import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

const AddArticle = () => {

    const addArticle = async (title, author, imageUrl, content, dateAdded) => {
        const docRef = await addDoc(collection(db, "articles"), {
            title,
            author,
            bgImage: imageUrl,
            text: content,
            dateAdded,
          });
          console.log("Document written with ID: ", docRef.id);
    }

    const onArticleCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let author = formData.get('author');
        let imageUrl = formData.get('imageUrl');
        let content = formData.get('content');
        let dateAdded = new Date();

        addArticle(title, author, imageUrl, content, dateAdded);
    }

  return (

    <form className="mx-auto" onSubmit={onArticleCreate} method="POST" style={{ width: "500px", padding: "50px" }}>
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
