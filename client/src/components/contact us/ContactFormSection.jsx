import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../../assets/contactformEmail-Icon.svg"; // Re-import emailIcon
import closeIcon from "../../assets/close-Icon.svg"; // Re-import closeIcon
import Loader from "../../utils/Loader";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // State for success/error messages after submission attempt
  const [submissionMessage, setSubmissionMessage] = useState("");

  // State to track if the form is currently being sent (for disabling inputs)
  const [isSending, setIsSending] = useState(false);

  // Re-added state for modal visibility
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
    // Clear the error for the specific field as user types
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
    // Clear general submission message if user starts typing again
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
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        });

        // If message is successfully sent, show the modal
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
        setErrors({}); // Clear any existing errors
        setSubmissionMessage(""); // Ensure toast message is cleared if modal is shown
      } catch (error) {
        console.error("EmailJS send error:", error);
        setSubmissionMessage(
          "Failed to send your message. Please try again. 😢"
        );
        // Clear error message after 5 seconds
        setTimeout(() => setSubmissionMessage(""), 5000);
      } finally {
        setIsSending(false); // Re-enable inputs and button
      }
    } else {
      setSubmissionMessage("Please correct the errors in the form. ⚠️");
      // Clear message after 5 seconds if validation fails
      setTimeout(() => setSubmissionMessage(""), 5000);
    }
  };

  // Re-added handleCloseModal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 bg-[#E6F3EC] rounded-md h-full">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Name Input Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-[24px]  text-[#4B4B4B] font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="full Name*"
            className={`w-full p-3  bg-[#FFFFFF] rounded-md focus:outline-none  text-[#4B4B4B]  hover:ring-1 hover:ring-[#008A3F] transition-all duration-200 ${
              errors.name ? "border-red-500 ring-red-500" : ""
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
            className="block  text-[24px]  text-[#4B4B4B] font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email*"
            className={`w-full p-3  bg-[#FFFFFF] rounded-md focus:outline-none  text-[#4B4B4B]  hover:ring-1 hover:ring-[#008A3F] transition-all duration-200 ${
              errors.email ? "border-red-500 ring-red-500" : ""
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
            className="block  text-[24px]  text-[#4B4B4B]  font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your Email*"
            rows="7"
            className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none  text-[#4B4B4B] hover:ring-1 hover:ring-[#008A3F] resize-y transition-all duration-200 ${
              errors.message ? "border-red-500 ring-red-500" : ""
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
          className="w-full h-[74px] bg-[#00AA55] text-[#FEFFFF] rounded-md hover:bg-[#006A3F] transition-colors hover:cursor-pointer  font-semibold text-[20px] md:text-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSending}
        >
          {isSending ? <Loader/> : "Send Message"}
        </button>

        {/* Submission Message (Toast) - Only shown for validation/EmailJS errors, not success */}
        {submissionMessage && !showModal && (
          <p
            className={`text-center mt-4 p-3 rounded-lg font-medium text-lg shadow-md ${
              submissionMessage.includes("success") ||
              submissionMessage.includes("Thank you!")
                ? "bg-green-100 text-green-700 border border-green-300" // Styles for success toast
                : "bg-red-100 text-red-700 border border-red-300" // Styles for error/validation toast
            }`}
          >
            {submissionMessage}
          </p>
        )}
      </form>

      {/* Success Modal - Re-added */}
      {showModal && (
        <div className="fixed inset-0  opacity-[80px] flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center relative">
            {/* Close Button */}
            <img
              className="absolute top-3 right-3 w-6 h-6 hover:cursor-pointer" // Adjusted size for close icon
              onClick={handleCloseModal}
              src={closeIcon}
              alt="Close modal"
            />
            <div className="flex justify-center mb-6 ">
              <img src={emailIcon} alt="emailIcon" className="w-16 h-16" />{" "}
              {/* Adjusted size for email icon */}
            </div>
            <h2 className="text-3xl font-bold text-[#000101] mb-4">
              Thank you!
            </h2>
            <p className="text-[#000101] mb-6">
              Your message has been sent. Our support team will reply to your
              message within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
              className="w-full bg-[#008A3F] text-white py-3 rounded-md hover:bg-[#006A3F] transition-colors font-bold text-lg hover:cursor-pointer"
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
