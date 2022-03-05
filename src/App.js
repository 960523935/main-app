import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Sub from "./pages/sub";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/sub/*" element={<Sub />} />
      </Route>
    </Routes>
  );
}

export default App;
