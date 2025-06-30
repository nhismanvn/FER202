import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
}
