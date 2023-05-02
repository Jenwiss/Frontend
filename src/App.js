import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginView from './views/LoginView';
import SignIn from './components/sections/SignIn';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
