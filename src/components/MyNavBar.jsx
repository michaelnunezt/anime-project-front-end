import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyNavBar = ({ user, handleSignOut }) => {
  return (
    <Navbar className="fixed-top custom-navbar" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand className="navbar-brand" href="/">
          PopPlay
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-links d-flex gap-4">
            <Link className="nav-link" to="/">Home</Link>
            {user ? (
              <Link className="nav-link" to="/" onClick={handleSignOut}>Sign Out</Link>
            ) : (
              <>
                <Link className="nav-link" to="/genres">Genres</Link>
                <Link className="nav-link" to="/my-list">My List</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;