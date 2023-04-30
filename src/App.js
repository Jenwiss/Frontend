import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginView from './views/LoginView';



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
