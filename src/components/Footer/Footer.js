import "./Footer.css"

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="row">
        <div className="row-content buffer clear-after">
          <section id="top-footer">
            
            <div className="widget meta-social column three">
              <h4>Follow Us</h4>
              <ul className="inline">
                <li>
                  <a href="/" className="twitter-share border-box">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="facebook-share border-box">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="pinterest-share border-box">
                    <i className="fa fa-pinterest fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="bottom-footer">
            <p className="keep-left">
              &copy; 2021{" "}
              <a href="/" alt="FabestiaThesaurus">
                Fabestia
              </a>
              . All Rights Reserved.
            </p>
            <p className="keep-right">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}


export default Footer;