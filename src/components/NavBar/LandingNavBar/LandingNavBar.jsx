import { Link } from "react-router-dom";
import './LandingNavBar.css';

const LandingNavBar = (props) => {
  console.log(props);

  return (
    <nav className="landing-navbar">
      <div className="logo">
        <span>PopPlay</span>
      </div>
      <div className="nav-links">
        <Link to="/Landing">Home</Link> {/* Styled Link */}
        <a
          className="logout"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            props.handleSignOut(); // Call the sign-out function
          }}
        >
          Log out
        </a> {/* Styled logout link */}
      </div>
    </nav>
  );
};

export default LandingNavBar;

