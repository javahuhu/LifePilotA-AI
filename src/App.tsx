
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/landing';
import Login from './pages/LogIn/LogIn';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App
