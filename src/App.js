import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/pages/Home"
import Mapping from './pages/Mapping';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='Mapping' element={<Mapping />}/>
  </Routes>
  </>
}

export default App;
