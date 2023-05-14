/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Article from "./pages/article";
import Leaderboard from "./pages/Leaderboard";
import Puzzle from "./pages/Puzzle"
import OnThisDay from "./pages/OnThisDay";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
