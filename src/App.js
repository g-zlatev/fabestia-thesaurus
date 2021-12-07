import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Features from "./components/Features/Features";
import NewsMasonry from "./components/NewsMasonry/NewsMasonry";
import Testimonial from "./components/Testimonial/Testimonial";
import StatCounter from "./components/StatCounter/StatCounter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Intro />

      <main role="main">
        <div id="main">
          <Features />
          <NewsMasonry />
          <Testimonial />
          <StatCounter />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
