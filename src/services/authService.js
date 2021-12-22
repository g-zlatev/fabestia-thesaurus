import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const register = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  localStorage.removeItem("username");
};

export const getUser = () => {
  let username = localStorage.getItem("username");
  return username;
};

// const isAuthenticated = () => {
//     return Boolean(getUser());
// }
