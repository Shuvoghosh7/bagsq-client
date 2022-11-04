import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory />
            </RequireAuth>
          }
        />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
