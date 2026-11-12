import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Menu from "./components/Menu/Menu";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) return;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [location.pathname, location.state]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <LoadingScreen />
      <Menu />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
