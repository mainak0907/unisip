'use client'
import React, { useState } from "react";

export default function Contactus() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    setIsSubmitting(true);
    fetch("https://getform.io/f/bmdkpwga", {
      method: "POST",
      body: formData
    }).then(() => {
      setQuery({ name: "", email: "", phone: "", message: "" });
      setSuccessMessage("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!");
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage("");
      }, 10000);
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-full p-4 sm:p-8">
      <div className="m-4 sm:m-8 border-4 p-6 sm:p-10 shadow-xl border-white rounded-xl w-full max-w-lg bg-blue-950">
        <h1 className="text-center font-extrabold text-2xl sm:text-4xl mb-4 sm:mb-6 text-white">GET A QUOTE</h1>
        
        {successMessage && (
          <div className="text-center text-green-400 font-bold text-sm sm:text-lg mb-4">
            {successMessage}
          </div>
        )}

        <form className="m-4 sm:m-6" onSubmit={formSubmit}>
          <div className="mb-4 sm:mb-6">
            <label className="text-sm sm:text-lg font-semibold text-white">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              className="form-control border-2 p-2 sm:p-3 w-full text-sm sm:text-lg rounded-md"
              value={query.name}
              onChange={handleParam()}
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="text-sm sm:text-lg font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="form-control border-2 p-2 sm:p-3 w-full text-sm sm:text-lg rounded-md"
              value={query.email}
              onChange={handleParam()}
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="text-sm sm:text-lg font-semibold text-white">Phone</label>
            <input
              type="phone"
              name="phone"
              required
              placeholder="Phone number"
              className="form-control border-2 p-2 sm:p-3 w-full text-sm sm:text-lg rounded-md"
              value={query.phone}
              onChange={handleParam()}
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="text-sm sm:text-lg font-semibold text-white">Message</label>
            <textarea
              name="message"
              required
              placeholder="Message"
              className="form-control border-2 p-2 sm:p-3 w-full text-sm sm:text-lg rounded-md h-24 sm:h-32"
              value={query.message}
              onChange={handleParam()}
            />
          </div>
          <button
            className={`w-full p-3 sm:p-4 text-lg sm:text-xl font-bold rounded-lg transition duration-300 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-white text-blue-950 hover:bg-gray-300"
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "PLEASE WAIT..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
}
