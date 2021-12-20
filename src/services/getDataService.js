
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getData() {
    const querySnapshot = await getDocs(collection(db, "articles"));
    let res = [];
    querySnapshot.forEach(doc => res.push({ ...doc.data(), id: doc.id }));
    return res;
  }