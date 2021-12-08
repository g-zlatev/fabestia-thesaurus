function NotFoundErrorPage() {
  return (
    <body class="error404">
      <main role="main">
        <div id="main" class="row">
          <div class="row-content buffer-left buffer-right buffer-bottom clear-after">
            <div class="column nine">
              <article class="clear-after">
                <h2>Page Not Found</h2>
                <p>
                  Sorry but we couldn't find the page you are looking for.
                  Please check to make sure you've typed the URL correctly. You
                  may also want to search for what you are looking for.
                </p>
              </article>
            </div>
            <aside role="complementary" class="sidebar column three last">
              <div class="widget widget_search">
                <form role="search">
                  <span class="pre-input">
                    <i class="icon icon-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search..."
                    value=""
                    class="plain buffer"
                  />
                </form>
              </div>
              <div class="widget">
                <h4>Recent Posts</h4>
                <ul class="plain">
                  <li>
                    <a href="#">Uff e che fatica</a>
                  </li>
                  <li>
                    <a href="#">Un weekend al mare</a>
                  </li>
                  <li>
                    <a href="#">Il signor Kasper</a>
                  </li>
                  <li>
                    <a href="#">Ottimo lavoro</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </body>
  );
}

export default NotFoundErrorPage;