import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import LoginRouter from '../router/LoginRouter';

// 전역적으로 값을 다룰때 사용
const AuthContext = createContext({});

export function AuthProvider({ authService, children }) {
  const [user, setUser] = useState(undefined);
  

  useEffect(() => {
    authService.me()
    .then(setUser)
    .catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (id, pw, name) =>
      authService
        .signup(id, pw, name)
        .then((user) => {
          window.history.pushState("", process.env.REACT_APP_BASE_URL, `/`)
          return setUser(user)
        }),
    [authService]
  );

  const logIn = useCallback(
    async (username, password) => 
      authService.login(username, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => {
      window.history.pushState("", process.env.REACT_APP_BASE_URL, `/`)
      setUser(undefined)
    }),
    [authService]
  );
  

  const context = useMemo(
    () => ({
      user,
      signUp,
      logIn,
      logout,
    }),
    [user, signUp, logIn, logout]
  );

  return (
    <AuthContext.Provider value={context}>
      {
      user 
        ? children
        : <LoginRouter />  
      }
    </AuthContext.Provider>
  );
}


export default AuthContext;

export const useAuth = () => useContext(AuthContext);
