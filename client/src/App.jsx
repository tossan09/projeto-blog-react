import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Publish from "./pages/Publish";
import Post from "./pages/PostCard";
import Edit from "./components/Edit";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="d-flex flex-column min-vh-100">
        <main className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
