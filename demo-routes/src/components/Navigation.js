import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function Navigation() {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
        </Nav>
        {isAuth
  ? <Nav.Link onClick={() => { logout(); navigate('/login'); }}>Logout</Nav.Link>
  : <Nav.Link as={Link} to="/login">Login</Nav.Link>}

      </Container>
    </Navbar>
  );
}
