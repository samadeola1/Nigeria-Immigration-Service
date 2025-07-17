import React, { useEffect, useState } from "react";
import axios from "axios";
import immigration from "../assets/IMMIGRTION 1.png";
import logo from "../assets/image 8 (1).png";
import google from "../assets/devicon_google.png";
import apple from "../assets/ri_apple-fill.png";
import { auth, provider } from "../firebase"; // your firebase config file
import { signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";

// Main App component
export default function Login() {
  const [animate, setAnimate] = useState(false);
  const [phoneNumberEmail, setPhoneNumberEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = {
      identifier: phoneNumberEmail,
      password: password,
    };

    console.log("🔐 Attempting login with:", form);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/services/sign-in",
        form
      );

      console.log("✅ Login successful:", res.data);

      const token = res.data.token;
      if (!token) {
        console.warn("⚠️ No token received from backend.");
        alert("Login failed: No token received.");
        return;
      }

      // Save token based on "Remember Me"
      if (rememberMe) {
        localStorage.setItem("token", token);
        console.log("🗃️ Token stored in localStorage");
      } else {
        sessionStorage.setItem("token", token);
        console.log("🗃️ Token stored in sessionStorage");
      }

      navigate("/");
    } catch (err) {
      console.error("❌ Login error:", err);
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const token = await user.getIdToken();

      // Save token
      localStorage.setItem("token", token);

      // Save user info
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          photo: user.photoURL,
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Google sign-in failed", error);
      alert("Google sign-in failed");
    }
  };

  return (
    <div className="w-full  flex items-center justify-center bg-white font-sans ">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden w-7xl mx-4">
        {/* Left Section - Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${immigration})`,
          }}
        ></div>

        {/* Right Section - Login Form */}
        <div className="md:w-1/2 py-8 px-5 lg:px-25 lg:py-10 flex flex-col justify-center">
          {/* Logo*/}
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="NIGERIA IMMIGRATION" />
          </div>

          <h2 className="text-[28px] font-poppins font-bold text-gray-800 text-center mb-2">
            Welcome to the Nigeria immigration Portal
          </h2>

          <p className="text-gray-600 text-center mb-8 text-[20px] font-normal font-poppins">
            Sign in securely to access passport, visa and permit services.
          </p>

          <form onSubmit={handleSignIn} className="space-y-4 ">
            {/* Phone number / Email input */}
            <div className="relative">
              <input
                type="text"
                id="phoneNumberEmail"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] text-[16px] font-normal font-poppins"
                placeholder="Phone number / Email Address"
                value={phoneNumberEmail}
                onChange={(e) => setPhoneNumberEmail(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121] text-[16px] font-normal font-poppins"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-checkbox h-4 w-4"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-[#212121] text-[16px] font-normal font-poppins"
                >
                  Remember me
                </label>
              </div>
              <a
                href="forgot-password"
                className="text-[#212121] hover:underline text-[16px] font-normal font-poppins"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-md text-[20px] font-semibold font-poppins cursor-pointer"
            >
              Sign in
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-[18px] font-normal font-poppins">
              or
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social sign-in buttons */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md mb-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-sm text-[18px] font-semibold font-poppins cursor-pointer"
          >
            <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          {/* Don't have an account? Sign up */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#00AA55]  hover:underline font-poppinstext-[16px]"
            >
              Sign up
            </a>
          </p>

          {/* Footer text */}
          <p className="text-center font-poppinstext-[16px] text-gray-500 mt-4 px-8">
            This is a secured government portal. unauthorized access is
            prohibited
          </p>
        </div>
      </div>
    </div>
  );
}
