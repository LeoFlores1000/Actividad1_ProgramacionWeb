import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Alta from "./pages/Alta";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/alta" element={<Alta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}