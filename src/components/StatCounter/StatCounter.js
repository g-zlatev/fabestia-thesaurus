import { useState, useEffect } from "react";
import StatCounterItem from "./StatCounterItem";
import "./StatCounter.css";
import { getData } from "../../services/getDataService";

function StatCounter() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    getData().then((x) => {
      setNum(x.length);
    });
  });

  return (
    <section className="row section">
      <div className="row-content buffer even clear-after counter-items">
        <StatCounterItem key={1} num={num} />
      </div>
    </section>
  );
}

export default StatCounter;
