function StatCounter() {
  return (
    <section className="row section">
      <div className="row-content buffer even clear-after">
        <div className="column three">
          <div className="count-item">
            <div className="small-icon red">
              <i className="icon icon-leaf"></i>
            </div>
            <div
              className="count-number"
              data-from="0"
              data-to="1284"
              data-speed="1000"
              data-refresh-interval="25"
            ></div>
            <div className="count-subject">Active projects</div>
          </div>
        </div>
        <div className="column three">
          <div className="count-item">
            <div className="small-icon red">
              <i className="icon icon-heart"></i>
            </div>
            <div
              className="count-number"
              data-from="0"
              data-to="28903"
              data-speed="1500"
              data-refresh-interval="25"
            ></div>
            <div className="count-subject">Users who love them</div>
          </div>
        </div>
        <div className="column three">
          <div className="count-item">
            <div className="small-icon red">
              <i className="icon icon-tshirt"></i>
            </div>
            <div
              className="count-number"
              data-from="0"
              data-to="326"
              data-speed="2000"
              data-refresh-interval="25"
            ></div>
            <div className="count-subject">T-Shirts &amp; Gadgets</div>
          </div>
        </div>
        <div className="column three last">
          <div className="count-item">
            <div className="small-icon red">
              <i className="icon icon-graph"></i>
            </div>
            <div
              className="count-number"
              data-from="0"
              data-to="58802"
              data-speed="2500"
              data-refresh-interval="25"
            ></div>
            <div className="count-subject">Everyday visitors</div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default StatCounter;