import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Landing.css';
import LandingNavBar from "../NavBar/LandingNavBar/LandingNavBar";

const Landing = () => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/signIn");
  };
  const goToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      <LandingNavBar/>
      <Container className="text-white d-flex flex-column  align-items-center">
        <h1 className="text-center text-white my-5">PopPlay</h1>

        <p>

        </p>
        <div className="mt-5">
          <Button className="button-dark-grey mx-5" onClick={goToSignIn}>
            Sign In
          </Button>
          <Button className="button-dark-grey" onClick={goToSignUp}>Sign Up</Button>
        </div>
      </Container>
    </>
  );
};

export default Landing;
