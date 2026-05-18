import CustomCursor from "./ui/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./ui/Ticker";
import Services from "./components/Services";
import About from "./components/About";
import DataEcosystem from "./components/DataEcosystem";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ServiceDetail from "./pages/ServiceDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function HomePage() {
  return (
    <div className="grid-bg">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <DataEcosystem />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
