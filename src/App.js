import React, { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import Property from "./pages/Property";
import About from "./pages/About";
import Help from "./pages/Help";
import Chat from "./components/chat/chat";
import Footer from "./components/footer/Footer";
import MortgageCalc from "./components/mortgage/mortgagecalc";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import NavMenu from "./components/Navbar";

// import jwt_decode from "jwt-decode";
import { AuthContextProvider } from './context/AuthContext';
import Account from "./pages/Account";
import Protected from "./components/Protected/Protected";

const App = () => {



  return (
    <>
      <AuthContextProvider>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/property" element={<Property />} />
          <Route path="/mortgagecal" element={<MortgageCalc />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Protected><Account/></Protected>} />
        </Routes>
        <Chat />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
