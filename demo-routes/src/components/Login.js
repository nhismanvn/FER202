import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuth, login } = useAuth();

  if (isAuth) return <Navigate to="/posts" replace />;

  const handleSubmit = e => {
    e.preventDefault();
    // validate đơn giản – demo
    if (user === 'admin' && pass === '123') {
      login();                   // bật cờ authenticated
      navigate('/posts');
    } else setError('Sai tài khoản hoặc mật khẩu');
  };

  return (
    <div className="container p-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={user}
                 onChange={e => setUser(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={pass}
                 onChange={e => setPass(e.target.value)} required/>
        </div>
        {error && <div className="text-danger mb-2">{error}</div>}
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
