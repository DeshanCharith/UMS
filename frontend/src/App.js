
import './App.css';
import Header from './components/Header';
import AddUser from './components/AddUser';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AllUsers from './components/Allusers';
import ImportUser from './components/ImportUser';
import UpdateUser from './components/UpdateUser';
import Login from './components/Login';
import WithoutNav from './components/WithoutNav';
import WithNav from './components/WithNav';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route element={<WithoutNav/>}>
      <Route path="login" element={<Login />} />
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/import" element={<ImportUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/" element={<AllUsers />} />
        </Route>
      
    </Routes>


    </BrowserRouter>


   
   


  );
}

export default App;