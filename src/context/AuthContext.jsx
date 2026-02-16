import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Demo User', role: 'admin', email: 'demo@example.com' });

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      isAdmin: user?.role === 'admin',
      login: (payload) => setUser(payload),
      logout: () => setUser(null),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
