import "./MyFooter.css"; 


const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/help">Help Center</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} PopPlay, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;