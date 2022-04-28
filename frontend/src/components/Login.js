import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const initialState = {
    
    email: '',
    pwd: '',
   
}



class Login extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;

    }

  
    onChange(e) {
       this.setState({ [e.target.name]: e.target.value })
      
           
       
    }


    onSubmit(e) {
        // this.setState({name: 'fbv'})
        e.preventDefault();
        let user = {
            email: this.state.email,
            pwd: this.state.pwd,
        };


        console.log('DATA TO SEND', user)
        axios.post('http://localhost:8070/user/login', user)
            .then(response => {

                if(response.data.length===0){
                    alert('User Not Found')
                }
                else
                {  
                    localStorage.setItem('role_value', response.data[0].role);
                    localStorage.setItem('id_value', response.data[0].name);
                    document.getElementById('login_id').click(); 
                  
                }
               
                
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
            
            
    }


    render() {

 

        return (

            <div>
            <Link  id="login_id" to="/" className="nav-link" style={{marginLeft:"40px",color:"white",fontWeight:"500"}}>Create User</Link>
            <div class="container" style={{width:"60%",marginTop:"100px"}}>
            <div class="card text-center">
            <div class="card-header">
            <h5 class="card-title">User Login</h5>
            </div>
            <div class="card-body">
                
                <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
 
                <div class="mb-3">
                    <label for="email" class="form-label" style={{float:"left"}}>Email</label>
                    <input type="text" class="form-control"  name="email"aria-describedby="emailHelp"
                    defaultValue={this.state.email}
                    onChange={this.onChange}/>
                </div>

                <div class="mb-3">
                 <label for="pwd" class="form-label" style={{float:"left"}}>Password</label>
                 <input type="password" class="form-control" name="pwd"
                  defaultValue={this.state.pwd}
                  onChange={this.onChange}/>
             </div>

             <button type="submit" class="btn btn-primary">Sign in</button>


                </form>
            </div>
            <div class="card-footer text-muted">
            <a style={{float:"left",color:"#3483eb"}}>Forgot your password?</a>
            </div>
            </div>
            </div>
           
            
             </div>

        )}



}


export default  Login;