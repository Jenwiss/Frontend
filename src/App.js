import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginView from './views/LoginView';
import AccountCreated from './views/AccountCreated';
import SignIn from './components/sections/SignIn';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/" element={<AccountCreated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
