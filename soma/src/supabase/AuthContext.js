import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// Purpose: To create a React context for authentication, which will manage and provide user state across your application.

// What We Did:
//     Created AuthContext: This is a context that will be used to provide authentication data to the rest of your app.
//     AuthProvider Component:
//         State Management: We used the useState hook to create a user state that will hold the authenticated user data.
//         Effect Hook: We used the useEffect hook to:
//             Get the current session and set the user state accordingly.
//             Set up a listener for authentication state changes to update the user state when the user logs in or out.
//         Unsubscribe: We clean up the listener when the component unmounts to avoid memory leaks.
//     useAuth Hook: A custom hook that simplifies access to the AuthContext.

// Why We Did This
//     Modularity: Separating the Supabase client setup and authentication logic into their own files makes the code more modular and easier to manage.
//     Reusability: The Supabase client and authentication context can be imported and used in any component that needs them.
//     State Management: The AuthContext provides a centralized place to manage user authentication state, making it easier to protect routes and manage user sessions.