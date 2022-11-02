import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
