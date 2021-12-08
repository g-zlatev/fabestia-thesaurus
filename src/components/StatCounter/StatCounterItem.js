function StatCounterItem() {
  return (
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
  );
}

export default StatCounterItem;
