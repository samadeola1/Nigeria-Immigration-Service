import React from "react";
import logo from "../assets/image 234.png"
const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
        <header className="bg-white px-6 py-4 shadow-sm">
        <img
          src={logo}
          alt="Nigeria Immigration Service"
          className="h-25px"
        />
      </header>

      {/* Form Card */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
          <h2 className="text-xl font-semibold text-green-500 mb-4">Forgot Password</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone or Email"
              className="text-black w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <p className="text-sm text-gray-600 mb-6">
            We'll send a verification code to this phone number or email if it matches an existing NIS account
          </p>

          <div className="space-y-3">
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
              Next
            </button>

            <button className="w-full border border-green-600 text-green-600 py-2 rounded-md hover:bg-green-50 transition">
              Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
