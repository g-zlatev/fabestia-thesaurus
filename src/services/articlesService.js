import db from "../firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
  where,
  limit,
  addDoc,
} from "firebase/firestore";

export async function getAllArticles() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  let res = [];
  querySnapshot.forEach((doc) => res.push({ ...doc.data(), id: doc.id }));
  return res;
}

export async function getOrderedArticles(orderParam, limitParam) {
  const q = query(
    collection(db, "articles"),
    orderBy(orderParam, "desc"),
    limit(limitParam)
  );
  const querySnapshot = await getDocs(q);
  let res = [];
  querySnapshot.forEach((doc) => res.push({ ...doc.data(), id: doc.id }));
  return res;
}

export async function createArticle(
  title,
  author,
  imageUrl,
  content,
  dateAdded
) {
  const docRef = await addDoc(collection(db, "articles"), {
    title,
    author,
    bgImage: imageUrl,
    text: content,
    dateAdded,
  });
  console.log("Document written with ID: ", docRef.id);
}
