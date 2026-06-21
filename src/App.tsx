import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AmbientSound, { AmbientSoundProvider } from "./components/AmbientSound";
import { PageTurnProvider } from "./context/PageTurnContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <AmbientSoundProvider>
        <PageTurnProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#fcfdfd]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <AmbientSound />
        </div>
        </PageTurnProvider>
      </AmbientSoundProvider>
    </Router>
  );
}
