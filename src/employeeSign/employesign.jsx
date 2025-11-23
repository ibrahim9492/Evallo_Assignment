import { useState } from "react";
import "./employesign.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EmployeeSignPage=()=>{

    const [employeedata,setEmployeedata]=useState({
        name:"",
        gmail:"",
        password:""
    })

    const nav=useNavigate()

    function datafun(e){
        const {name,value}=e.target;
        setEmployeedata({...employeedata,[name]:value})
    }

   async function formfun(e){
        e.preventDefault();
        await axios.post("https://evallobackend-9tvu.onrender.com/employeeaccount/",employeedata)
        nav("/employee")
   }

    return(
        <div className="employesignmain">
            <div>
                <h1 className="employesighead">Employee Account</h1>
                <form onSubmit={formfun}>
                    <div>
                        <h1 className="employesighead1">Name * </h1>
                        <input className="employesigninput" type="text" placeholder="Name" name="name" onChange={datafun} required/>
                    </div>
                    <div>
                        <h1 className="employesighead1">Gmail * </h1>
                        <input className="employesigninput" type="gmail" placeholder="gmail" name="gmail" onChange={datafun} required />
                    </div>
                    <div>
                        <h1 className="employesighead1">Password * </h1>
                        <input className="employesigninput" type="password" placeholder="password" name="password" onChange={datafun} required/>
                    </div>
                    <div>
                        <input className="employeesubmit" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeSignPage;