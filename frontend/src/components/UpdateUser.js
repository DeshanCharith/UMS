import React, { Component} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    dob:'',
    role: '',
    assign_lead: '',
    dept: '',
    pwd: '',
    selectOptions : [],
}
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class updateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;

    }

    async getOptions(){
        const res = await axios.get('http://localhost:8070/user/get_Lead')
        const data = res.data

        this.setState({selectOptions: data})
    
      }

    componentDidMount() {
        this.getOptions();
        let { id } = this.props.params;
        console.log(id);
        axios.get('http://localhost:8070/user/get/'+id)
            .then(response => {
               
                this.setState({ name: response.data[0].name, email: response.data[0].email, dob: response.data[0].dob,
                    role: response.data[0].role, assign_lead: response.data[0].assign_lead,
                    dept: response.data[0].dept, pwd: response.data[0].pwd })
                    
            })
            .catch(error => {
                alert(error.message)
            })

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    onSubmit(e) {
        e.preventDefault();
        let user = {
            name: this.state.name,
            email: this.state.email,
            dob: this.state.dob,
            role: this.state.role,
            assign_lead: this.state.assign_lead,
            dept: this.state.dept,
            pwd: this.state.pwd,

        };
        let { id } = this.props.params;
        axios.put('http://localhost:8070/user/update/'+id, user)
            .then(response => {
                alert('Event Data successfully Updated')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }
    render() {
  
        return (
            <div>
            <br></br>
            <h4  style={{marginLeft:"20px"}}>Update Users</h4><br></br>
           
            <div class="container" style={{width:"60%"}}>
            <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
 
             <div class="mb-3">
                 <label for="name" class="form-label">Name</label>
                 <input type="text" class="form-control"  name="name"aria-describedby="emailHelp"
                value={this.state.name}
                 onChange={this.onChange}/>
             </div>
 
             <div class="mb-3">
                 <label for="email" class="form-label">Email</label>
                 <input type="email" class="form-control" name="email" aria-describedby="emailHelp"
                    defaultValue={this.state.email}
                    onChange={this.onChange}/>
             </div>
 
             <div class="mb-3">
                 <label for="dob" class="form-label">Date Of Birth</label>
                 <input type="text" class="form-control" name="dob" aria-describedby="emailHelp" placeholder="dd-mm-yyyy"
                  defaultValue={this.state.dob}
                  onChange={this.onChange}/>
             </div>
 
             <div class="mb-3" style={{marginTop: "30px" }}>
                 <label for="role" class="form-label">Role</label>
                 <select style={{marginLeft: "95px", width:"250px" }}  name="role" class="custom-select custom-select-sm" value={this.state.role} onChange={this.onChange}> 
                     <option selected>Select Role</option>
                     <option value="Manager">Manager</option>
                     <option value="Lead">Team Lead</option>
                     <option value="Agent">Agent</option>
                  </select>
             </div>
 
             <div class="mb-3" style={{marginTop: "30px" }}>
                 <label for="assign_lead" class="form-label">Assign Lead</label>
                 <select style={{marginLeft: "40px", width:"250px" }} name="assign_lead"  class="custom-select custom-select-sm" value={this.state.assign_lead} onChange={this.onChange}>  
                  {this.state.selectOptions.map(data=>(
                   <option value = {data.name}>{data.name}</option>  
                  ))}
                    
                  </select>
             </div>
 
             <div class="mb-3" style={{marginTop: "25px"}}>
                 <label for="dept" class="form-label">Department</label>
                 <select style={{marginLeft: "40px", width:"250px" }} name="dept" class="custom-select custom-select-sm" value={this.state.dept} onChange={this.onChange}> 
                     <option selected>Select Department</option>
                     <option value="DEP01">DEP01</option>
                     <option value="DEP02">DEP02</option>
                     <option value="DEP03">DEP03</option>
                     <option value="DEP04">DEP04</option>
                  </select>
             </div>
             
             <div class="mb-3">
                 <label for="pwd" class="form-label">Password</label>
                 <input type="password" class="form-control" name="pwd"
                  defaultValue={this.state.pwd}
                  onChange={this.onChange}/>
             </div>
             
             <button type="submit" class="btn btn-primary">Update</button>  
 
         </form>
 
 
             </div>
             </div>

        )
    }


}
export default withParams(updateStudent);

