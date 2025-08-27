import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WideLogo from "./assets/wide-logo.svg";

export default function App() {
  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-200 text-black flex items-center gap-6 shadow-md">
        <img
          src={WideLogo}
          alt="Wide Logo"
          className="h-10 w-auto mr-4 drop-shadow"
        />
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
      <div className="p-6 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}