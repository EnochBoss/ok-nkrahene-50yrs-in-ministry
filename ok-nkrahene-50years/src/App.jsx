import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Wishes from "./pages/Wishes";
import Venue from "./pages/Venue";
import GalleryPage from "./pages/GalleryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookLaunch from "./pages/BookLaunch";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col mt-20">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/book-launch" element={<BookLaunch />} />
          </Routes>

          {/* <WhatsAppShare text="Join me in celebrating Rev. O. K. Nkrahene's 50 years in ministry!" /> */}
        </main>

        <Footer />
      </div>
    </Router>
  );
}
