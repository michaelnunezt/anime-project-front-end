import './LandingNavBar.css';  // Make sure this CSS is imported

const LandingNavBar = (props) => {
  console.log(props);
  

  return (
    <nav className="landing-navbar">
      <div className="logo">
        <a href="/Landing">PopPlay</a>
      </div>

      <div className="nav-links">
        <a href="/Landing">Home</a>
        <a href="/MySignUp">Sign Up</a>
        <a href="/MySignIn">Sign In</a>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
        <button className="search-button">Search</button>
      </div>

      <div className="user-section">
        <a href="/" className="logout">Profile</a>
        <button onClick={()=> props.handleSignOut()}>Log out</button>
      </div>
    </nav>
  );
};

export default LandingNavBar;
