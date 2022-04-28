import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

function App() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
      console.log(d);
      axios.post('http://localhost:8070/user/bulk', d)
      .then(response => {
          alert('User data bulk successfully Uploaded')
          
      })
      .catch(error => {
          console.log(error.message);
          alert(error.message)
      })
    });
  };

  return (
    <div class="container">
        <br></br>
        <div class="table container">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />  
        <button type="submit" style={{marginLeft: "25px"}} class="btn btn-primary">Submit</button>  
      </div>
  <br></br>
  <div   style={{overflowY:"scroll",height:"70vh"}}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Dob</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Item}>
              <th>{d.Name}</th>
              <td>{d.Email}</td>
              <th>{d.Dob}</th>
              <td>{d.Role}</td>
              <th>{d.Department}</th>
              <td>{d.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
      <hr></hr>
    </div>
  );
}

export default App;