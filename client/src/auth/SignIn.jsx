import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"; // Import useForm
import immigration from "../assets/IMMIGRTION 1.png";
import logo from "../assets/image 8 (1).png";
import google from "../assets/devicon_google.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"; // For password visibility
import toast, { Toaster } from "react-hot-toast"; // For toast notifications

export default function Login() {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false); // State for form submission loading

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleSignIn = async (data) => {
    // Receive data from react-hook-form
    setLoading(true);

    const payload = {
      email: data.email, // Use 'email' as per backend
      password: data.password,
    };

    console.log("🔐 Attempting login with payload:", payload);

    try {
      const res = await axios.post(
        "https://nigeria-immigration-service.onrender.com/api/services/sign-in",
        payload
      );

      console.log("✅ Login successful:", res.data);

      // Extract token from res.data.user.token as per your backend controller
      const token = res.data.user?.token;

      if (!token) {
        console.warn("⚠️ No token received from backend.");
        toast.error("Login failed: No authentication token received.");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("token", token);
        console.log("🗃️ Token stored in localStorage");
      } else {
        sessionStorage.setItem("token", token);
        console.log("🗃️ Token stored in sessionStorage");
      }

      toast.success(
        res.data.message || "Signed in successfully! Redirecting..."
      );
      reset(); // Clear form fields on success
      setTimeout(() => navigate("/"), 2000); // Redirect to homepage
    } catch (err) {
      console.error("❌ Login error:", err.response || err);

      let errorMessage = "Login failed. Please try again.";

      if (axios.isAxiosError(err) && err.response) {
        // Prioritize backend's 'errMsg' as per your controller
        if (err.response.data && err.response.data.errMsg) {
          errorMessage = err.response.data.errMsg;
        } else if (err.response.data && typeof err.response.data === "string") {
          // Fallback if backend sends error message as a plain string (e.g., 500 error)
          errorMessage = err.response.data;
        } else if (err.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (err.response.status === 400 || err.response.status === 401) {
          // Specific messages for 400/401 as per your backend
          errorMessage =
            err.response.data?.errMsg ||
            "Invalid credentials. Please check your email and password.";
        }
      } else if (axios.isAxiosError(err) && !err.response) {
        // Network error (e.g., server unreachable, no internet)
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else {
        // Other unexpected errors
        errorMessage = "An unexpected error occurred. Please try again.";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          photo: user.photoURL,
        })
      );
      toast.success("Google Sign-in successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Google sign-in failed", error);
      let googleErrorMessage = "Google sign-in failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        googleErrorMessage = "Google sign-in window closed. Please try again.";
      } else if (error.code === "auth/cancelled-popup-request") {
        googleErrorMessage =
          "Google sign-in already in progress. Please wait or try again.";
      } else if (error.message) {
        googleErrorMessage = error.message;
      }
      toast.error(googleErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Outer container: Added p-4 sm:p-6 for padding on small screens, and md:p-0 to remove it from md and above
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5] font-poppins p-4 sm:p-6 md:p-0">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Inner container: flex-col on small, flex-row from md.
          max-w for small screens, w-full from md.
          rounded-lg/shadow-lg for small, removed for md and above using md:!rounded-none md:!shadow-none */}
      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-full lg:max-w-full xl:max-w-full rounded-lg shadow-lg md:rounded-none md:shadow-none">
        {/* Left Section - Image: Hidden on small, block from md, takes half width from md */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${immigration})` }}
        ></div>

        {/* Right Section - Login Form: Full width on small, half width from md.
            Internal padding adjusted for all breakpoints. */}
        <div className="w-full md:w-1/2 mx-auto py-8 px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-center">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="NIGERIA IMMIGRATION" className="h-16" />
            </div>
          </a>

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome to the Nigeria Immigration Portal
          </h2>

          <p className="text-gray-600 text-center mb-8 px-4 text-base">
            Sign in securely to access passport, visa and permit services.
          </p>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            {/* Email input */}
            <div className="relative">
              <input
                type="email" // Changed type to email
                placeholder="Email Address" // Changed placeholder
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("email", {
                  // Registered as 'email'
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle type for visibility
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-[#212121] focus:ring-green-600 focus:border-green-600"
                {...register("password", {
                  // Registered as 'password'
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
                  />
                </svg>
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff className="w-5 h-5" />
                ) : (
                  <MdOutlineVisibility className="w-5 h-5" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-[#212121] text-sm md:text-base"
                >
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password" // Corrected href
                className="text-[#00AA55] hover:underline text-sm md:text-base"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-lg">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social sign-in buttons */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md mb-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          {/* Don't have an account? Sign up */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#00AA55] hover:underline text-base" // Adjusted font size
            >
              Sign up
            </a>
          </p>

          {/* Footer text */}
          <p className="text-center text-gray-500 mt-4 px-4 text-sm">
            {" "}
            {/* Adjusted px-8 to px-4 */}
            This is a secured government portal. Unauthorized access is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
