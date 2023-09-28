import { Dispatch, SetStateAction } from 'react';
import Authentication from '@features/authentication';
import { AuthType } from '@constants/types';

type LoginPageProps = {
  setAuth: Dispatch<SetStateAction<AuthType>>;
};

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
  return (
    <div className="bg-gradient-custom min-h-screen flex-center">
      <Authentication setAuth={setAuth} />
    </div>
  );
};

export default LoginPage;
