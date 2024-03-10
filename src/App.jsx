import Navbar from "./navbar";
import About from "./about";
import Insight from "./insight";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";



const  App = () =>{
  return (
    <Router>
      <div>
     
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App
