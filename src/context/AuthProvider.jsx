import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "./context";

function AuthProvider({ children }) {
  const setUserId = ({ data }) => localStorage.setItem('userID', JSON.stringify(data));
  const parsedUserData = JSON.parse(localStorage.getItem('userID'));
  const [isLogged, setLogged] = useState(!!parsedUserData);
  const [user, setUser] = useState(isLogged ? { username: parsedUserData.username } : null);
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const logOut = useCallback(() => {
    localStorage.removeItem('userID');
    setLogged(false)
    console.log(localStorage.getItem('userID'))
  }, []);

  const data = useMemo(() => ({
    setUserId,
    isLogged,
    setLogged,
    user,
    logOut,
    theme,
    setTheme,
  }), [setUserId, isLogged, setLogged, user, logOut, theme, setTheme])

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
