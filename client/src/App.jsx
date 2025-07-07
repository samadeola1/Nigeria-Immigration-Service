import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Loader from "./utils/Loader";
import ScrollToTop from "./utils/ScrollToTop";

const LandingPage = lazy(() => import("./layout/LandingPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-row items-center justify-center gap-2">
            <Loader />
          </div>
        }
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
