import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/Authentication';
import LoginPage from '@pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoginPage></LoginPage>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
