import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    console.log('Login data:', loginData);

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow-lg max-w-md">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Email:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Password:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <button
              className="btn btn-outline btn-warning"
              type="submit"
            >
              Login
            </button>
          </div>
          <div>
            <h1>Don't have an account ? Register here</h1>
            <Link to="/register">
            <button
              className="btn btn-outline btn-warning">
              Register
            </button>
              </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
