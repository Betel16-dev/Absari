import { useEffect } from 'react';
import { useAuth } from '../context/useAuth.js';

function ProtectedRoute({ children, onUnauthenticated, requiredRole }) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) onUnauthenticated();
  }, [onUnauthenticated, user]);

  if (!user) return null;

  if (user.role !== requiredRole) {
    return (
      <section role="alert">
        <h1>Access denied</h1>
        <p>You do not have permission to view this page.</p>
      </section>
    );
  }

  return children;
}

export default ProtectedRoute;
