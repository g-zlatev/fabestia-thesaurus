import "./Intro.css";
import IntroItem from "./IntroItem";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

function Intro() {
  const [intros, setIntros] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    onSnapshot(collection(db, "articles"), (snapshot) => {
      setIntros(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
  }, []);

  const item = getRandom(intros);

  if (isLoading) {
    return (
      <div id="intro-wrap">
        <div
          id="intro"
          className="preload darken"
        >
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div id="intro-wrap">
      <div
        id="intro"
        className="preload darken"
      >
        <IntroItem key={item.id} item={item} />
      </div>
    </div>
  );
}

export default Intro;
