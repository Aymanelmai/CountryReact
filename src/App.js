import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
