import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/userService";
import './MySignUp.css';

// eslint-disable-next-line react/prop-types
const MySignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateMessage("");
    try {
      const { user } = await signup(formData);
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      updateMessage("Signup failed. Please try again.");
    }
  };

  const { email, password, confirmPassword } = formData;

  const isFormInvalid = () => {
    return !(email && password && password === confirmPassword);
  };

  return (
    <main className="signup-container">
      <h1>Sign Up</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="signup-btn"
          disabled={isFormInvalid()}
        >
          Sign Up
        </button>
      </form>
      <div className="help-text text-center">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
};

export default MySignUp;