// import { Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import LandingNavBar from "../NavBar/LandingNavBar/LandingNavBar";
import CardGrid from "../CardGrid/CardGrid";
import HeroBanner from "../HeroBanner/HeroBanner";
import './Landing.css';

const Landing = () => {
  // const navigate = useNavigate();
  // const goToSignIn = () => {
  //   navigate("/signIn");
  // };
  // const goToSignUp = () => {
  //   navigate("/signUp");
  // };
  return (
      <div id="landing-page">
        <LandingNavBar />
        <HeroBanner />
        <CardGrid />
      </div>
    );
  };
export default Landing;
