import { Link } from 'react-router-dom';

const ArticleErrorNotice = () => {
  return (
    <div className="alert alert-danger" role="alert">
      There's no articles yet! Click {" "}
      <Link to={"add"} className="alert-link">
        HERE 
      </Link>
      {" "} to add one!
    </div>
  );
};

export default ArticleErrorNotice;