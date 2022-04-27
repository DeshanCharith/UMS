import React, {Component}from "react";
import axios from "axios";
import {Link} from "react-router-dom";

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


        axios.delete('http://localhost:8070/user/delete/'+value1)
        .then(response => {
            alert('User Data successfully Deleted');

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
                   <td>{data.name} </td>
                   <td> {data.email} </td>
                   <td> {data.dob}</td>
                   <td>{data.role}</td>
                   <td>{data.assign_lead}</td>
                   <td> {data.dept} </td>
                   <td>
                   <Link to={`/update/${data._id}`}>
                       <button data-id={data._id} data-name={data.name} data-email={data.email} data-dob={data.dob}
                   data-role={data.role}  data-assign_lead={data.assign_lead} data-dept={data.dept} type="button" class="btn btn-warning btn-sm">Edit</button>
                   </Link>
                   
                    <button style={{marginLeft:"5px"}} onClick={this.delete_user} data-value1={data._id} type="button" class="btn btn-danger btn-sm">Delete</button> </td>
 </tr>
                  )) }
                    
                </tbody>
</table>
</div>

        )

    }
}


export default  allUser;