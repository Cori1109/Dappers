import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Tasks from "./pages/Tasks";
import BuildDex from "./pages/BuildDex";
import Cryptogame from "./pages/Cryptogame";
import NFTmarket from "./pages/NFTmarket";
import LandingDex from "./pages/LandingDex";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/builddex" element={<BuildDex />} />
          <Route path="/landingdex" element={<LandingDex />} />
          <Route path="/cryptogame" element={<Cryptogame />} />
          <Route path="/nftmarket" element={<NFTmarket />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
