import React, {Component}from "react";
import axios from "axios";
const initialState = {
    
    selectOptions : [],
    DisplayData : '',
}

class allUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = initialState;

    }


    async getOptions(){
        const res = await axios.get('http://localhost:8070/user/')
        const data = res.data

        this.setState({selectOptions: data})
    
      }

      componentDidMount(){
        this.getOptions();
    }
  

    delete_user(e){
        const value1 = e.currentTarget.getAttribute("data-value1")
        alert(value1);

        axios.delete('http://localhost:8070/user/delete/'+value1)
        .then(response => {
            alert('User Data successfully Deleted');
            this.getOptions();
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    onChange(e) {
       // this.setState({ [e.target.name]: e.target.value })
        
     }
 
    update_user(e){

        const id = e.currentTarget.getAttribute("data-id")

        let user = {
            name: e.currentTarget.getAttribute("data-name"),
            email: e.currentTarget.getAttribute("data-email"),
            dob: e.currentTarget.getAttribute("data-dob"),
            role: e.currentTarget.getAttribute("data-role"),
            assign_lead:  e.currentTarget.getAttribute("data-assign_lead"),
            dept: e.currentTarget.getAttribute("data-dept"),
        };

        axios.put('http://localhost:8070/user/update/'+id,user)
        .then(response => {
            alert('User Data successfully Updated');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    render() {


        console.log(this.state.DisplayData);
        return(
<div>
<br></br>
<div class="" style={{width:"100%"}}>
<h4>View Users</h4><br></br>

<table class="table">
<thead>
   <tr>
   
   <th scope="col">Name</th>
   <th scope="col">Email</th>
   <th scope="col">DOB</th>
   <th scope="col">Role</th>
   <th scope="col">Assign Lead</th>
   <th scope="col">Dept</th>
   </tr>
</thead>
<tbody>
                 
                    
{this.state.selectOptions.map(data=>(
    <tr>
                   <td><input id ="name"  name = {data.name} defaultValue={data.name}  onChange={this.onChange}></input> </td>
                   <td><input name = {data.email} defaultValue={data.email}></input> </td>
                   <td><input name = {data.dob} defaultValue={data.dob}></input> </td>
                   <td><input name = {data.role} defaultValue={data.role}></input> </td>
                   <td><input name = {data.assign_lead} defaultValue={data.assign_lead}></input> </td>
                   <td><input name = {data.dept} defaultValue={data.dept}></input> </td>
                   <td><button onClick={this.update_user} data-id={data._id} data-name={data.name} data-email={data.email} data-dob={data.dob}
                   data-role={data.role}  data-assign_lead={data.assign_lead} data-dept={data.dept} type="button" class="btn btn-warning btn-sm">Edit</button>
                   
                    <button style={{marginLeft:"5px"}} onClick={this.delete_user} data-value1={data._id} type="button" class="btn btn-danger btn-sm">Delete</button> </td>
 </tr>
                  )) }
                    
                </tbody>
</table>
</div>
</div>
        )

    }
}


export default  allUser;