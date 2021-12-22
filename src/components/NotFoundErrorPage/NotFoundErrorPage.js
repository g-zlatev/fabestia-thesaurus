import "./NotFoundErrorPage.css"

function NotFoundErrorPage() {
  return (
          <div className="row-content error-page-container">
            <div className="column nine">
              <article className="clear-after">
                <h2>Page Not Found</h2>
                <p>
                  Sorry but we couldn't find the page you are looking for.
                  Please check to make sure you've typed the URL correctly.
                </p>
              </article>
            </div>
          </div>
  );
}

export default NotFoundErrorPage;