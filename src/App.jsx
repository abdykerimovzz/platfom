import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

import Home from "./pages/Home";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <>
      <Header />

      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

