import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) {
    return null; // or a loading spinner
  }

  return children;
}

// To protect certain routes in your application, you'll need to redirect users to the login page if they are not authenticated.