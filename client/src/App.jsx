import React, { lazy, Suspense, memo, useEffect } from "react"; // Import useEffect
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import the Zustand store
import { useAuthStore } from "./store/authStore";

// Memoize directly imported components
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import Loader from "./utils/Loader.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import SignIn from "./auth/SignIn.jsx"; // Changed from Login to SignIn
import SignUp from "./auth/SignUp.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import ResetPassword from "./auth/ResetPassword.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

// Lazy load and memoize components
const MemoizedLandingPage = memo(
  lazy(() => import("./layout/LandingPage.jsx"))
);
const MemoizedAboutUs = memo(lazy(() => import("./pages/AboutUs.jsx")));
const MemoizedServices = memo(lazy(() => import("./pages/Services.jsx")));
const MemoizedInformationCenter = memo(
  lazy(() => import("./pages/InformationCenter.jsx"))
);
const MemoizedContactUs = memo(lazy(() => import("./pages/ContactUs.jsx")));

// Memoize components that are directly used in routes
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);
const MemoizedLoader = memo(Loader);
const MemoizedScrollToTop = memo(ScrollToTop);
const MemoizedSignIn = memo(SignIn); // Changed from MemoizedLogin to MemoizedSignIn
const MemoizedSignUp = memo(SignUp);
const MemoizedForgotPassword = memo(ForgotPassword);
const MemoizedResetPassword = memo(ResetPassword);
const MemoizedErrorPage = memo(ErrorPage);

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const initializeAuth = useAuthStore(
    (state) => state.initializeAuthFromCookies
  );

  // Initialize authentication state from cookies on app mount
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]); // Dependency array includes initializeAuth to prevent lint warnings, though it's stable

  const layoutVisiblePaths = new Set([
    "/",
    "/about-us",
    "/services",
    "/information-center",
    "/contact-us",
  ]);

  const isAuthPath =
    location.pathname === "/signin" || // Changed from /login to /signin
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname.startsWith("/reset-password/");

  const showLayout = layoutVisiblePaths.has(location.pathname) && !isAuthPath;

  return (
    <>
      {showLayout && <MemoizedNavbar />}
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-row items-center justify-center gap-2">
            <MemoizedLoader />
          </div>
        }
      >
        <MemoizedScrollToTop />
        <Routes>
          <Route path="/" element={<MemoizedLandingPage />} />
          <Route path="/about-us" element={<MemoizedAboutUs />} />
          <Route path="/services" element={<MemoizedServices />} />
          <Route
            path="/information-center"
            element={<MemoizedInformationCenter />}
          />
          <Route path="/contact-us" element={<MemoizedContactUs />} />
          <Route path="/signin" element={<MemoizedSignIn />} />{" "}
          {/* Changed from /login to /signin */}
          <Route path="/signup" element={<MemoizedSignUp />} />
          <Route path="/forgot-password" element={<MemoizedForgotPassword />} />
          <Route
            path="/reset-password/:resetToken"
            element={<MemoizedResetPassword />}
          />
          <Route path="*" element={<MemoizedErrorPage />} />
        </Routes>
      </Suspense>
      {showLayout && <MemoizedFooter />}
    </>
  );
}

export default App;
