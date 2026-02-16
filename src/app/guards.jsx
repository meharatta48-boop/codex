import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export function AdminRoute() {
  const { isAdmin } = useAuth();
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}
