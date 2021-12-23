import db from "../firebase";

import {
  collection,
  doc,
  query,
  getDoc,
  getDocs,
  addDoc,
  where,
  updateDoc,
  deleteDoc,
  orderBy,
  limit,
  increment,
} from "firebase/firestore";

export async function getAllArticles() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  let res = [];
  querySnapshot.forEach((doc) => res.push({ ...doc.data(), id: doc.id }));
  return res;
}

export async function getOneById(id) {
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
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

export async function getOwnArticles(userId, orderParam) {
  const q = query(
    collection(db, "articles"),
    where("userId", "==", userId),
    orderBy(orderParam, "desc")
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
  dateAdded,
  userId,
  userEmail
) {
  const docRef = await addDoc(collection(db, "articles"), {
    title,
    author,
    bgImage: imageUrl,
    text: content,
    dateAdded,
    userId,
    userEmail,
    likes: 0,
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function editArticle(id, editedArticle) {
  const article = doc(db, "articles", id);

  await updateDoc(article, editedArticle);
}

export async function incrementParam(id, incrementValue) {
  const article = doc(db, "articles", id);

  await updateDoc(article, {
    likes: increment(incrementValue),
  });
}

export async function deleteArticle(id) {
  await deleteDoc(doc(db, "articles", id));
}
