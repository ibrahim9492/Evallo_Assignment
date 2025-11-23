import { useState } from "react";
import "./employeeform.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeFormPage=()=>{

    const [employeedata,setEmployeedata]=useState({
        name:"",
        role:"",
        gmail:""
    })

    function datafun(e){
        const {name,value}=e.target;
        setEmployeedata({...employeedata,[name]:value})
    }

    const nav=useNavigate()

   async function formfun(e){
      e.preventDefault();
      await axios.post("https://evallobackend-9tvu.onrender.com/employeeform/",employeedata)
      nav("/employeelist")
   }

    return(
        <div>
            <div className="employeeform">
                <form onSubmit={formfun}>
                    <h1 className="employeeformhead">Employee Details</h1>
                   <div>
                      <h1 className="employeeform1">Name of Employee</h1>
                      <input className="employeeform2" type="text" placeholder="Name" name="name" onChange={datafun} required/>
                   </div>
                   <div>
                       <h1 className="employeeform1">Role</h1>
                       <input className="employeeform2" type="text" placeholder="Role" name="role" onChange={datafun} required/>
                   </div>
                   <div>
                        <h1 className="employeeform1">Gmail</h1>
                        <input className="employeeform2" type="gmail" placeholder="Gmail" name="gmail" onChange={datafun} required/>
                   </div>
                   <div>
                      <input className="employeesubmit" type="submit"/>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeFormPage;