import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signinn from "./pages/Signinn";
import SignOut from "./pages/SignOut";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signinn />}></Route>
          <Route path="/sign-up" element={<SignOut/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
