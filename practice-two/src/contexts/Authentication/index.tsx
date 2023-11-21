import { createContext, ReactNode, Dispatch, SetStateAction } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';

export type AuthType = {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: number;
  };
};

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthContext = createContext<{
  auth: AuthType | null;
  setAuth: Dispatch<SetStateAction<AuthType | null>>;
}>({ auth: null, setAuth: () => {} });

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<AuthType | null>('_auth', null); // this state connected with local storage

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
