import { useState } from "react";
import { Button } from "react-bootstrap";
import { signIn } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import './MySignIn.css'


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

  const { username, password } = formData;

  return (
    <main className="text-white bg-dark rounded p-5">
      <section>
        <h1 className="my-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">
              Username:
            </label>
            <input
              placeholder="username"
              className="form-control"
              type="text"
              id="name"
              value={username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              placeholder="password"
              className="form-control"
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
          <Button className="my-3" type="submit">
            Sign In
          </Button>
            <p className="mt-4">
              New to PopPlay? <a href="/signUp">Sign up now</a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default MySignIn;
