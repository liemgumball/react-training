import { createContext, ReactNode, Dispatch, SetStateAction } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';

export type AuthType = {
  accessToken: string;
  name: string;
};

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthContext = createContext<{
  auth: AuthType | undefined;
  setAuth: Dispatch<SetStateAction<AuthType | undefined>> | undefined;
}>({ auth: undefined, setAuth: undefined });

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<AuthType | undefined>(
    '_auth',
    undefined
  ); // this state connected with local storage

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
