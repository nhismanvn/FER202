import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch('http://localhost:3001/posts')
    .then(res => res.json())
    .then(setPosts)
    .catch(console.error);
}, []);


  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link to={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
