
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/landing';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App
