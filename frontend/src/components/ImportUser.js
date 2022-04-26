import React, {Component}from "react";
import axios from "axios";
const initialState = {
    
    selectOptions : [],
    DisplayData : '',
}

class ImportUser extends Component {
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
  

    render() {


        console.log(this.state.DisplayData);
        return(
<div>
<br></br>
<div class="" style={{width:"100%"}}>
<h4>Import Bulk Users</h4><br></br>

<div class="mb-3" style={{width:"30%", float:"righ"}}>
  <label for="formFileSm" class="form-label">Import excel file</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file"/> 
</div>

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
                   <td><input name = {data.name} defaultValue={data.name}></input> </td>
                   <td><input name = {data.email} defaultValue={data.email}></input> </td>
                   <td><input name = {data.dob} defaultValue={data.dob}></input> </td>
                   <td><input name = {data.role} defaultValue={data.role}></input> </td>
                   <td><input name = {data.assign_lead} defaultValue={data.assign_lead}></input> </td>
                   <td><input name = {data.dept} defaultValue={data.dept}></input> </td>
 </tr>
                  )) }
                    
                </tbody>
</table>
</div>
</div>
        )

    }
}


export default  ImportUser;