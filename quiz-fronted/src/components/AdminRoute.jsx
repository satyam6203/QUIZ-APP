import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();
  
  return currentUser?.isAdmin ? children : <Navigate to="/" />;
}