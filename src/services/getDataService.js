
import db from "../firebase";
import { collection, query, getDocs, orderBy, where, limit } from "firebase/firestore";

export async function getData() {
    const querySnapshot = await getDocs(collection(db, "articles"));
    let res = [];
    querySnapshot.forEach(doc => res.push({ ...doc.data(), id: doc.id }));
    return res;
  }

  export async function getOrderedData(orderParam, limitParam) {
    const q = query(collection(db, "articles"), orderBy(orderParam, "desc"), limit(limitParam));
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach(doc => res.push({ ...doc.data(), id: doc.id }));
    return res;
  }