import React, {useState,useEffect} from "react";
import axios from "axios";

export default function AllUsers(){

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        function getUserData(){       
            axios.get("http://localhost:8070/user/").then((res)=>{
                console.log(res.data);
                setUsers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

    getUserData();
    },[])
  

    return(
        <div>
           
         <h2>View Users</h2>


        </div>
          
    )
}