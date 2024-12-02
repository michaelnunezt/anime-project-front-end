import { Button, Container } from "react-bootstrap";
import "./HeroBanner.css"; 

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Container className="text-center text-white">
        <h1>Dragon Ball Z</h1>
        <p>Suites you</p>
        {/* <Button variant="warning" size="lg">
          Play
        </Button> */}
      </Container>
    </div>
  );
};

export default HeroBanner;