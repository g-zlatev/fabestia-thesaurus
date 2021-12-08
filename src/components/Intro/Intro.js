import "./Intro.css";
import IntroItem from "./IntroItem";
import { useState } from "react";

function Intro() {
  let [intros, setIntros] = useState([
    {
      id: 1,
      title: "Test Title 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae?",
      author: "Author1",
      bgImage:
        "https://i.pinimg.com/550x/01/d1/31/01d131db9350156ba2ef8c8770998e7d.jpg",
    },
    {
      id: 2,
      title: "Test Title 2",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae?",
      author: "Author2",
      bgImage:
        "https://i.pinimg.com/550x/01/d1/31/01d131db9350156ba2ef8c8770998e7d.jpg",
    },
  ]);

  return (
    <div id="intro-wrap">
      <div
        id="intro"
        className="preload darken"
        data-autoplay="5000"
        data-navigation="true"
        data-pagination="true"
        data-transition="fadeUp"
      >
        {intros.map((x) => (
          <IntroItem key={x.id} >{x}</IntroItem>
        ))};
      </div>
    </div>
  );
}

export default Intro;
