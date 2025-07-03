import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Loader from "./utils/Loader";

const Section = lazy(() => import("./layout/Section"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-row items-center justify-center gap-2">
     <Loader/>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;