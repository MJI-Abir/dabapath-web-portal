/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
