import "./Intro.css";
import IntroItem from "./IntroItem";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import db from "../../firebase";

function Intro() {
    let intros2 = [
      {
        id: 5,
        title: "Qilin",
        text: "The qilin is a legendary hooved chimerical creature that appears in Chinese mythology, and is said to appear with the imminent arrival or passing of a sage or illustrious ruler.",
        author: "Pesho",
        bgImage:
          "https://wallpaperaccess.com/full/2882214.jpg",
      },
      {
        id: 6,
        title: "Test Title 2",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae?",
        author: "Author2",
        bgImage:
          "https://i.pinimg.com/550x/01/d1/31/01d131db9350156ba2ef8c8770998e7d.jpg",
      },
    ];

  const [intros, setIntros] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "articles2"), (snapshot) => {
      setIntros(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log(intros);
  // console.log(intros2);

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
          <IntroItem key={x.id} item={x} />
        ))}
        ;
      </div>
    </div>
  );
}

export default Intro;
