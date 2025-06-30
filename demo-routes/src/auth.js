import { createContext, useContext, useState, useEffect } from 'react';

const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  // lưu trạng thái vào localStorage để khỏi login lại mỗi lần refresh
  useEffect(() => {
    setIsAuth(localStorage.getItem('auth') === '1');
  }, []);

  const login  = () => { localStorage.setItem('auth', '1'); setIsAuth(true); };
  const logout = () => { localStorage.removeItem('auth');   setIsAuth(false); };

  return (
    <AuthCtx.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
