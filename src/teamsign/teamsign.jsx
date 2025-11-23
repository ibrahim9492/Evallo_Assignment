import "./teamsign.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const TeamSignPage=()=>{

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
       console.log(employeedata)
        e.preventDefault();
        await axios.post("https://evallobackend-9tvu.onrender.com/teamaccount/",employeedata)
        nav("/team")
   }

    return(
         <div className="employesignmain">
            <div>
                <h1 className="employesighead">Team Account</h1>
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

export default TeamSignPage;