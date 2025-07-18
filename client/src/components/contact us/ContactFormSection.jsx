import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../../assets/contactformEmail-Icon.svg";
import closeIcon from "../../assets/close-Icon.svg";
import Loader from "../../utils/Loader"; // Ensure Loader component is correctly imported

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        emailjs.init(publicKey);
      } else {
        console.error(
          "EmailJS Public Key is not defined. Please check your .env file."
        );
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  // Handle input changes and clear corresponding error
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
    if (submissionMessage) {
      setSubmissionMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setIsSending(true);
      setSubmissionMessage(""); // Clear previous messages

      try {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        await emailjs.send(serviceID, templateID, {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

        setShowModal(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
        setErrors({}); // Clear any existing errors
        setSubmissionMessage(""); // Ensure toast message is cleared if modal is shown
      } catch (error) {
        console.error("EmailJS send error:", error);
        setSubmissionMessage(
          "Failed to send your message. Please try again. 😢"
        );
        setTimeout(() => setSubmissionMessage(""), 5000);
      } finally {
        setIsSending(false);
      }
    } else {
      setSubmissionMessage("Please correct the errors in the form. ⚠️");
      setTimeout(() => setSubmissionMessage(""), 5000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    // The main container for the form content.
    // Removed conditional pointer-events-none, as the modal overlay will handle blocking clicks.
    <div
      className={`p-6 sm:p-8 lg:p-10 bg-[#E6F3EC] rounded-md h-full pt-20`}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg text-gray-800 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name*"
            className={`w-full p-3 bg-white rounded-md focus:outline-none text-gray-800 placeholder-gray-500 hover:ring-1 hover:ring-[#008A3F] transition-all duration-200 ${
              errors.name ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={handleChange}
            disabled={isSending}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Input Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg text-gray-800 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email*"
            className={`w-full p-3 bg-white rounded-md focus:outline-none text-gray-800 placeholder-gray-500 hover:ring-1 hover:ring-[#008A3F] transition-all duration-200 ${
              errors.email ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
            disabled={isSending}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message Textarea Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg text-gray-800 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here*"
            rows="7"
            className={`w-full p-3 bg-white rounded-md focus:outline-none text-gray-800 placeholder-gray-500 hover:ring-1 hover:ring-[#008A3F] resize-y transition-all duration-200 ${
              errors.message ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
            disabled={isSending}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-md hover:from-green-700 hover:to-green-800 text-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg flex items-center justify-center"
          disabled={isSending}
        >
          {isSending ? <Loader /> : "Send Message"}
        </button>

        {/* Submission Message (Toast) */}
        {submissionMessage && !showModal && (
          <p
            className={`text-center mt-4 p-3 rounded-lg font-semibold text-base shadow-md ${
              submissionMessage.includes("success") ||
              submissionMessage.includes("Thank you!")
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {submissionMessage}
          </p>
        )}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"> {/* Changed bg-white/10 to bg-black/50 */}
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center relative">
            {/* Close Icon wrapped in a button for better clickability */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <img src={closeIcon} alt="Close" className="w-5 h-5" />
            </button>
            {/* Mail Icon moved here */}
            <div className="flex justify-center mb-6">
              <img src={emailIcon} alt="emailIcon" className="w-20 h-20" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Your message has been sent. Our support team will reply to your
              message within 24 hours.
            </p>
            {/* The "Go Back" button remains */}
            <button
              type="button"
              onClick={handleCloseModal} 
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-md hover:from-green-700 hover:to-green-800 text-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormSection;
