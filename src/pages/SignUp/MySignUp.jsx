import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/userService";
import MyFooter from "../../components/Footer/MyFooter";
import MyNavBar from "../../components/NavBar/MyNavBar/MyNavBar";
import "./MySignUp.css";

const MySignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { user } = await signup(formData);
      setUser(user);
      navigate("/Landing");
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <MyNavBar />
      <div className="signup-container">
        <h1>Sign Up</h1>
        {message && <p style={{ color: "red" }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
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
          <button className="signup-btn">Sign Up</button>
        </form>
        <div className="help-text">
          <p>
            Already have an account? <a href="/">Sign In</a>
          </p>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default MySignUp;
