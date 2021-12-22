import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import AllArticles from "./components/Articles/AllArticles";
import MyArticles from "./components/Articles/MyArticles";
import AddArticle from "./components/Articles/AddArticle";
import ArticleDetails from "./components/Articles/ArticleDetails";
import NotFoundErrorPage from "./components/NotFoundErrorPage/NotFoundErrorPage";
import EditArticle from "./components/Articles/EditArticle";

function App() {
  const [userInfo, setUserInfo] = useState({
    uid: "",
    email: "",
    accessToken: "",
  });

  const login = (authData) => {
    setUserInfo(authData);
  };

  const onRegister = () => {};

  const onLogout = () => {
    setUserInfo({ uid: "", email: "", accessToken: "" });
  };

  return (
    <AuthContext.Provider value={{ userInfo, login }}>
      <div className="page">
        <Header />
        <Routes>
          <Route path="*" element={<NotFoundErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register onRegister={onRegister} />}
          />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/my-articles" element={<MyArticles />} />
          <Route path="/articles/add" element={<AddArticle />} />
          <Route
            path="articles/details/:articleId"
            element={<ArticleDetails />}
          />
          <Route path="articles/edit/:articleId" element={<EditArticle />} />
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
