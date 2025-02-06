import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin'); // Default role
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setErrorMessage(''); // Reset error message
    console.log('Login Data:', { email, password, role });

    // TODO: Implement API call for login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black via-transparent to-black bg-cover">
      <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg w-full max-w-md">
        {/* Home Button with Icon */}
        <Link
          to="/"
          className="absolute top-4 left-4 flex items-center px-4 py-2 bg-transparent text-orange-500 font-semibold text-lg hover:text-white transition duration-300"
        >
          {/* Font Awesome Home Icon */}
          <i className="fas fa-home mr-2"></i> 
          Back to Home
        </Link>

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Login</h2>

        {/* Error Message */}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <label htmlFor="role" className="block text-gray-400 mb-2">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
            <option value="Customer">Customer</option>
          </select>

          {/* Email */}
          <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Password */}
          <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
          <div className="flex items-center bg-gray-800 border border-gray-600 rounded-lg mb-4">
            {/* Font Awesome Lock Icon */}
            <i className="fas fa-lock text-gray-400 px-4"></i>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white border-0 rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
          >
            Log in
          </button>

          {/* Registration Link */}
          <Link to="/registration" className="block text-center mt-4 text-orange-500 text-sm hover:underline">
            Don't have an account? Register here
          </Link>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2025 FastTrack. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
