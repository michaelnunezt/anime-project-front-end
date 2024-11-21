import './MyNavBar.css';  // Ensure you create a separate CSS file for styles

const MyNavBar = () => {
  return (
    <nav className="custom-navbar">
      <div>
        <a href="/Landing" className="navbar-brand">
          PopPlay
        </a>
      </div>
    </nav>
  );
};

export default MyNavBar;