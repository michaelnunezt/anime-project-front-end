import { useState } from "react";
// import { Button } from "react-bootstrap";
import { signIn } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import './MySignIn.css'
import MyFooter from "../../components/Footer/MyFooter";
import MyNavBar from "../../components/NavBar/MyNavBar/MyNavBar";


// eslint-disable-next-line react/prop-types
const MySignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signIn(formData); // sign in
      setUser(user); // set user to state
      navigate("/"); // navigate to dashboard
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = formData;

  return (
    <>
    <MyNavBar/>
    <main className="signin-container">
  <h1>Sign In</h1>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={email}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={password}
      onChange={handleChange}
    />
    <button
      type="submit"
      className="signin-btn"
    >
      Sign In
    </button>
  </form>
  <div className="help-text text-center">
    <p>
      New to PopPlay? <a href="/signup">Sign up now</a>
    </p>
  </div>
</main>
<MyFooter/>
</>

  );
};

export default MySignIn;
