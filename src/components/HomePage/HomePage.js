import Intro from "../Intro/Intro";
import NewsMasonry from "../NewsMasonry/NewsMasonry";
import Testimonial from "../Testimonial/Testimonial";
import StatCounter from "../StatCounter/StatCounter";

function HomePage() {

  return (
    <>
      <Intro />
      <main role="main">
        <div id="main">
          <NewsMasonry />
          <Testimonial />
          <StatCounter />
        </div>
      </main>
    </>
  );
}

export default HomePage;
