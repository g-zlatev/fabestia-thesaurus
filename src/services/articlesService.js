import db from "../firebase";
import {
  collection,
  doc,
  query,
  getDocs,
  addDoc,
  updateDoc,
  orderBy,
  where,
  limit,
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


//TODO: Check if working
export async function editArticle(id, { editedArticle }) {
  const article = doc(db, "articles", id);

  await updateDoc(article, {
    editedArticle,
  });
}
