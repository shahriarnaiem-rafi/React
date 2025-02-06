import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "Male",
    country: "Bangladesh",
    role: "Admin",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Inputs
  const validateForm = () => {
    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      return "Please fill in all fields.";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Enter a valid email address.";
    }

    // Password validation (Minimum 6 characters, at least 1 number)
    if (!/^(?=.*\d).{6,}$/.test(password)) {
      return "Password must be at least 6 characters with a number.";
    }

    // Phone validation (Only numbers, at least 10 digits)
    if (!/^\d{10,}$/.test(phone)) {
      return "Enter a valid phone number (at least 10 digits).";
    }

    return "";
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage("");
    console.log("Registered Data:", formData);

    // TODO: API Call to register the user
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black via-transparent to-black bg-cover">
      <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Register
        </h2>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Email */}
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Password */}
          <label className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Phone */}
          <label className="block text-gray-400 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Gender */}
          <label className="block text-gray-400 mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Country */}
          <label className="block text-gray-400 mb-2">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>

          {/* Role */}
          <label className="block text-gray-400 mb-2">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-6 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
            <option value="Customer">Customer</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
          >
            Register
          </button>

          {/* Login Link */}
          <Link
            to="/login"
            className="block text-center mt-4 text-orange-500 text-sm hover:underline"
          >
            Already have an account? Login here
          </Link>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2025 FastTrack. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
