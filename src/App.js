import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import * as authService from "./services/authService";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import AllArticles from "./components/Articles/AllArticles";
import MyArticles from "./components/Articles/MyArticles";

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    });
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  };

  return (
    <div className="page">
      <Header {...userInfo} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="articles" element={<AllArticles />}>
          {/* <Route path="edit" element={<p>Edit article</p>} /> */}
        </Route>
        <Route path="articles/my-articles" element={<MyArticles />} />
        <Route path="articles/add" element={<p>Add article</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
