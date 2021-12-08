import StatCounterItem from "./StatCounterItem";
import './StatCounter.css'

function StatCounter() {
  return (
    <section className="row section">
      <div className="row-content buffer even clear-after counter-items">

      <StatCounterItem />
      <StatCounterItem />

      </div>
    </section>
  );
}


export default StatCounter;