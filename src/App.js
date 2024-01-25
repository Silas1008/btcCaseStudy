import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BTC from './BTC/BTC';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<BTC/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
