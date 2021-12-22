import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import * as authService from "./services/authService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import AllArticles from "./components/Articles/AllArticles";
import MyArticles from "./components/Articles/MyArticles";
import AddArticle from "./components/Articles/AddArticle";
import ArticleDetails from "./components/Articles/ArticleDetails";
import NotFoundErrorPage from "./components/NotFoundErrorPage/NotFoundErrorPage"
import EditArticle from "./components/Articles/EditArticle";

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

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
    })
  };

  return (
    <div className="page">
      <Header {...userInfo} />
      <Routes>
        <Route path="*" element={<NotFoundErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/my-articles" element={<MyArticles />} />
        <Route path="/articles/add" element={<AddArticle />} />
        <Route path="articles/details/:articleId" element={<ArticleDetails />} />
        <Route path="articles/edit/:articleId" element={<EditArticle />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
