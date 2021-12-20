function StatCounterItem({num}) {
  // console.log(num);

  return (
    <div className="column three">
      <div className="count-item">
        <div className="small-icon red">
          <i className="icon icon-doc"></i>
        </div>
        <div className="count-number">{num}</div>
        <div className="counter-text">Total Articles</div>
      </div>
    </div>
  );
}

export default StatCounterItem;
