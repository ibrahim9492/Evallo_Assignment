import "./teamedit.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const TeamEditPage=()=>{
    const [employeedata,setEmployeedata]=useState({
        name:"",
        employee1:"",
        employee2:""
    })

    const par=useParams()
    const id=par.id

    function datafun(e){
        const {name,value}=e.target;
        setEmployeedata({...employeedata,[name]:value})
    }

    const nav=useNavigate()

   async function formfun(e){
      e.preventDefault();
      await axios.put("https://evallobackend-9tvu.onrender.com/teamedit/"+id,employeedata)
      nav("/teamlist")
   }
    return(
        <div>
            <div className="employeeform">
                <form onSubmit={formfun}>
                    <h1 className="employeeformhead">Team Edit</h1>
                   <div>
                      <h1 className="employeeform1">Name of Team</h1>
                      <input className="employeeform2" type="text" placeholder="Name" name="name" onChange={datafun} required/>
                   </div>
                   <div>
                       <h1 className="employeeform1">Employee_1</h1>
                       <input className="employeeform2" type="text" placeholder="Employee_1" name="employee1" onChange={datafun} required/>
                   </div>
                   <div>
                        <h1 className="employeeform1">Employee_2</h1>
                        <input className="employeeform2" type="text" placeholder="employee_2" name="employee2" onChange={datafun} required/>
                   </div>
                   <div>
                      <input className="employeesubmit" type="submit"/>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default TeamEditPage;