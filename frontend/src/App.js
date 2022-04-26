
import './App.css';
import Header from './components/Header';
import AddUser from './components/AddUser';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AllUsers from './components/Allusers';

function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/add" element={<AddUser />} />
        <Route path="/" element={<AllUsers />} />
      
    </Routes>




    </BrowserRouter>

   
    // <Router>
    //       <div>
    //    <Header/>
    //    <AddUser/>
    //    <AllUsers/>
    // </div>
    // </Router>


  );
}

export default App;
