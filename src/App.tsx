
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/landing';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App
