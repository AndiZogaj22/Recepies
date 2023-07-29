import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      name,
      email,
      password,
      image,
    };

    console.log('Register data:', registerData);

    setName('');
    setEmail('');
    setPassword('');
    setImage('');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow-lg max-w-md">
        <h2 className="text-3xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Name:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Image:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <button
              className="btn btn-outline btn-warning"
              type="submit"
            >
              Register
            </button>
          </div>
          <div>
            <h1>Already have an account ? Login here </h1>
            <Link to="/login">
            <button
              className="btn btn-outline btn-warning">
              Login
            </button>
              </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
