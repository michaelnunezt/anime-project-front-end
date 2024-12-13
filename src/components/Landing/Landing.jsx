import CardGrid from "../CardGrid/CardGrid";
import HeroBanner from "../HeroBanner/HeroBanner";
import './Landing.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const Landing = () => {

  return (
      <div id="landing-page">
        <HeroBanner />
        <CardGrid />
      </div>
    );
  };
export default Landing;
