import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(r => r.json())
      .then(data => setPost(data.find(p => p.id === id)));
  }, [id]);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
