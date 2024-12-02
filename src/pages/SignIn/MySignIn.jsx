import { useState } from "react";
import { signIn } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import './MySignIn.css';
import MyFooter from "../../components/Footer/MyFooter";
import MyNavBar from "../../components/NavBar/MyNavBar/MyNavBar";

const MySignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signIn(formData);
      setUser(user);
      navigate("/Landing");
    } catch (error) {
      console.error(error);
    }
  };

  const { username, password } = formData;

  return (
    <>
      <MyNavBar />
      <div id="signin-page">
        <main className="signin-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
          <div className="help-text text-center">
            <p>
              New to PopPlay? <a href="/MySignUp">Sign up now</a>
            </p>
          </div>
        </main>
      </div>
      <MyFooter />
    </>
  );
};

export default MySignIn;