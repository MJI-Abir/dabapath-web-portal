/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Article from "./pages/article";
import Leaderboard from "./pages/Leaderboard";
import Puzzle from "./pages/Puzzle";
import OnThisDay from "./pages/OnThisDay";
import Sidebar from "./components/sidebar/Sidebar";
import ArticleDetails from "./pages/ArticleDetails";

import { useEffect, useState } from "react";
import api from "./api";
import Cookies from "js-cookie";
import Profile from "./pages/Profile";

function App() {
  const [loading, setLoading] = useState(true);
  const [userSessionData, setUserSessionData] = useState(null);

  useEffect(() => {
    const userData = Cookies.get("userSessionData");
    if (userData) {
      setUserSessionData(JSON.parse(userData));
    }
  }, []);

  const checkLogin = () => {
    // Check for token in localStorage
    let token = localStorage.getItem("token");
    // If token does not exist, means user has not logged in ever
    if (token == null) {
      setLoading(false);
      return;
    }

    // if exists
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // Set Global user
        // Set isLoggedin true
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    checkLogin();
  });

  // Store user session data in session storage
  sessionStorage.setItem("userSessionData", JSON.stringify(userSessionData));

  // Retrieve user session data from session storage
  JSON.parse(sessionStorage.getItem("userSessionData"));

  // Remove user session data from session storage on logout
  sessionStorage.removeItem("userSessionData");

  if (!loading)
    return (
      <div className="App font-body" id="outer-container">
        <div id="page-wrap">
          <BrowserRouter>
            <Sidebar id="sidebar" />
            <Routes>
              <Route path="/">
                <Route index element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="signUp" element={<SignUp />}></Route>
                <Route path="article" element={<Article />}></Route>
                <Route path="leaderboard" element={<Leaderboard />}></Route>
                <Route path="onThisDay" element={<OnThisDay />}></Route>
                <Route path="puzzle" element={<Puzzle />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route
                  path="articleDetails"
                  element={<ArticleDetails />}
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  else {
    return <></>;
  }
}

export default App;
