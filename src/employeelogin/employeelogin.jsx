import { useEffect, useState } from "react";
import "./employeelogin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeLoginPage=()=>{

    const [account,setAccount]=useState([])

    const [status1,setStatus1]=useState(false)
    const [status2,setStatus2]=useState(false)

    useEffect(()=>{
         employeefun()
    },[])

    async function employeefun(){
         const data=await axios.get("https://evallobackend-9tvu.onrender.com/employeelogin")
         setAccount(data.data)
    }

    const [employeedata,setEmployeedata]=useState({
        gmail:"",
        password:""
    })

    function datafun(e){
        setStatus1(false)
        setStatus2(false)
        const {name,value}=e.target;
        setEmployeedata({...employeedata,[name]:value})
    }

    const nav=useNavigate()

    function formfun(e){
        e.preventDefault();
        for(let a of account){
            if(a.gmail==employeedata.gmail){
                if(a.password==employeedata.password){
                     nav("/employeelist")
            }
            else{
                setStatus1(true)
            }
        }
        else{
            setStatus2(true)
        }
        }
    }

    return(
        <div className="employeeloginmain">
            <div>
                <h1 className="employeeloginhead">Employee Login</h1>
                <form onSubmit={formfun}>
                    <div>
                        <h1 className="employeeloginhead1">Gmail</h1>
                        <input className="employeelogininput" type="gmail" placeholder="gmail" name="gmail" onChange={datafun} required/>
                    </div>
                    {status2?<p className="sorry">Sorry Gmail is wrong...</p>:<></>}
                    <div>
                        <h1 className="employeeloginhead1">Password</h1>
                        <input className="employeelogininput" type="password" placeholder="password" name="password" onChange={datafun} required/>
                    </div>
                    {status1?<p className="sorry">Sorry Password is wrong...</p>:<></>}
                    <div>
                        <input className="employeesubmit" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeLoginPage;