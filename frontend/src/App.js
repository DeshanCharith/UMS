
import './App.css';
import Header from './components/Header';
import AddUser from './components/AddUser';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AllUsers from './components/Allusers';
import ImportUser from './components/ImportUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>

        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/import" element={<ImportUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/" element={<AllUsers />} />
      
    </Routes>


    </BrowserRouter>

   
   


  );
}

export default App;
