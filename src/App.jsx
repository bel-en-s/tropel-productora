import "./App.css";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
