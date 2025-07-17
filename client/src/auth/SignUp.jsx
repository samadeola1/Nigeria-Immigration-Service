import React, { useEffect, useState } from "react";
import axios from "axios";
import immigration from "../assets/IMMIGRTION 1.png";
import logo from "../assets/image 8 (1).png";
import google from "../assets/devicon_google.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

export default function SignUp() {
  const [animate, setAnimate] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = {
      identifier: emailOrPhone,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        payload
      );
      const token = res.data.token;

      if (!token) {
        alert("Signup failed: No token returned.");
        return;
      }

      // Store token
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.error("❌ Signup error:", err);
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
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

      navigate("/");
    } catch (error) {
      console.error("Google sign-up failed", error);
      alert("Google sign-up failed");
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-white font-sans">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden w-full">
        {/* Left Image Section */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${immigration})` }}
        ></div>

        {/* Right Form Section */}
        <div className="md:max-w-1/2 mx-auto py-8 px-5 lg:px-40 lg:py-10 flex flex-col justify-center">
          <a href="/">
            <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="NIGERIA IMMIGRATION" />
            </div>
          </a>

          <h2 className="text-[28px] font-poppins font-bold text-gray-800 text-center mb-2">
            Create Your NIS Account
          </h2>

          <p className="text-gray-600 text-center mb-8 md:px-10 text-[16px] font-poppins">
            Join thousands of users to accessing Nigeria’s immigration services
            digitally
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Email / Phone */}
            <div className="relative">
              <input
                type="text"
                placeholder="Phone number / Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[#212121]"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
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
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-[#212121]"
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
                className="absolute right-3 top-2 text-sm text-gray-600"
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </button>
            </div>

            {/* Repeat Password */}
            <div className="relative">
              <input
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Repeat Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-[#212121]"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
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
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                className="absolute right-3 top-2 text-sm text-gray-600"
              >
                {showRepeatPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 text-[20px] font-semibold transition"
            >
              Sign up
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-[18px]">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign-Up */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 shadow-sm text-[18px] font-semibold"
          >
            <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-[#00AA55] hover:underline">
              Sign in
            </a>
          </p>

          <p className="text-center text-gray-500 mt-4 md:px-15 text-[14px]">
            This is a secured government portal. Unauthorized access is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
