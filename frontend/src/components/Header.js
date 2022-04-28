
import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" style={{fontWeight:"700",color:"#429bf5"}}>U M S</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" style={{marginLeft:"40px",color:"gray",fontWeight:"500"}}>User List</Link>
        </li>
        <li className="nav-item">
        
          <Link  to="/add" className="nav-link" style={{marginLeft:"40px",color:"gray",fontWeight:"500"}}>Create User</Link>
        
        </li>
        <li className="nav-item">
        <Link  to="/import" className="nav-link" style={{marginLeft:"40px",color:"gray",fontWeight:"500"}}>Import User Bulk</Link>
        </li>
      </ul>
    </div> 
  </div>
</nav>
    )
}

export default Header;