import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import PrivateRoute from './routes/PrivateRoute';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navigation />
      <Container className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          } />
          <Route path="/post/:id" element={
            <PrivateRoute>
              <PostDetail />
            </PrivateRoute>
          } />
        </Routes>
      </Container>
    </>
  );
}

export default App;
