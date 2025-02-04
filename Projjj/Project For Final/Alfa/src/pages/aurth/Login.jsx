import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    
    // Here you can add the logic to validate or submit the form
    setErrorMessage(''); // Reset error message
    console.log({ email, password, role });
    // Perform login action (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black via-transparent to-black bg-cover">
      <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg w-full max-w-md">
        <span><Link to="/">Home</Link></span>
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Login</h2>
        
        {/* Error message */}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <label htmlFor="role" className="block text-gray-400 mb-2">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 mb-6 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>

          {/* Email */}
          <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-6 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Password */}
          <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
          >
            Log in
          </button>

          {/* Registration Link */}
          <a href="./registration" className="block text-center mt-4 text-orange-500 text-sm hover:underline">
            Don't have an account? Register here
          </a>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2025 FastTrack. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;