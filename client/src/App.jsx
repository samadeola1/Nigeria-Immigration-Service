import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./layout/Navbar.jsx"; // Added .jsx extension
import Footer from "./layout/Footer.jsx"; // Added .jsx extension
import Loader from "./utils/Loader.jsx"; // Added .jsx extension
import ScrollToTop from "./utils/ScrollToTop.jsx"; // Added .jsx extension
import Login from "./pages/Login.jsx"; // Added .jsx extension
// Lazy load components for better performance
const LandingPage = lazy(() => import("./layout/LandingPage.jsx")); // Added .jsx extension
const AboutUs = lazy(() => import("./pages/AboutUs.jsx")); // Added .jsx extension
const Services = lazy(() => import("./pages/Services.jsx")); // Added .jsx extension
const InformationCenter = lazy(() => import("./pages/InformationCenter.jsx")); // Added .jsx extension
const ContactUs = lazy(() => import("./pages/ContactUs.jsx")); // Added .jsx extension
// Placeholder for new pages
// const ForgotPassword = lazy(() => import("./pages/ForgotPassword.jsx")); // New: ForgotPassword page
// const Signup = lazy(() => import("./pages/Signup.jsx")); // New: Signup page
/**
 * Main App component that sets up routing and conditional rendering.
 * It wraps the AppContent component within BrowserRouter.
 */
function App() {
  return (
    <BrowserRouter>
      {/* AppContent is a wrapper component that can utilize React Router hooks */}
      <AppContent />
    </BrowserRouter>
  );
}
/**
 * AppContent component handles the conditional display of the Navbar and Footer
 * and defines all the application routes.
 */
function AppContent() {
  // useLocation hook provides access to the current URL's location object
  const location = useLocation();
  // Define an array of paths where Navbar and Footer should be hidden
  const pathsToHideLayout = ["/login", "/forgot-password", "/signup"];
  // Determine if the Navbar and Footer should be shown.
  // They will be hidden if the current path is in the pathsToHideLayout array.
  const showLayout = !pathsToHideLayout.includes(location.pathname);
  return (
    <>
      {/* Conditionally render the Navbar component based on the current path */}
      {showLayout && <Navbar />}
      {/* Suspense is used for lazy-loaded components, showing a Loader while they load */}
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-row items-center justify-center gap-2">
            <Loader /> {/* Display a loader component */}
          </div>
        }
      >
        {/* ScrollToTop component ensures the page scrolls to the top on route changes */}
        <ScrollToTop />
        {/* Routes define the different paths and their corresponding components */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/information-center" element={<InformationCenter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} /> {/* The login page */}
          {/* <Route path="/signup" element={<Signup />} /> New: Signup page */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />{" "} */}
          {/* New: Forgot Password page */}
        </Routes>
      </Suspense>
      {/* Conditionally render the Footer component based on the current path */}
      {showLayout && <Footer />}
    </>
  );
}
export default App;
