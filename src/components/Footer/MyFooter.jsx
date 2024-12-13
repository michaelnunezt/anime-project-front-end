import "./MyFooter.css"; 


const MyFooter = () => {
  return (
    <footer className="footer">
  <div className="footer-content">
    <ul className="footer-links">
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>About Us</a>
      </li>
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>Terms of Use</a>
      </li>
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
      </li>
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>Help Center</a>
      </li>
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a>
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