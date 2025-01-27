import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // Feedback message
  const [messageType, setMessageType] = useState(""); // Message type (success/error/info)

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    // Validate fields
    if (!username || !email || !password) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      return;
    }

    try {
      // Send the data to the backend to check if the email is already in use
      setMessage("Processing... Please wait.");
      setMessageType("info");

      const response = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
      });

      // If the registration is successful
      setMessage(response.data.message);
      setMessageType("success");
    } catch (error) {
      // Handle error - if email is already in use or other error occurs
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
        setMessageType("error");
      } else {
        setMessage("Something went wrong. Please try again later.");
        setMessageType("error");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center">
          <h1 className="fw-bold mb-3">eXAMhELP</h1>
          <p className="text-muted">Create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        {/* Feedback message */}
        {message && (
          <p
            className={`mt-3 text-${
              messageType === "success"
                ? "success"
                : messageType === "error"
                ? "danger"
                : "info"
            }`}
          >
            {message}
          </p>
        )}

        <div className="text-center mt-3">
          <p className="mb-0">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-secondary mt-2 w-100">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
