import "./team.css"
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const TeamListPage=()=>{

    const [employeelist,setEmployeelist]=useState([])

    useEffect(()=>{
        listfun()
    },[])

    async function listfun(){
          const data=await axios.get("https://evallobackend-9tvu.onrender.com/teamlist")
          setEmployeelist(data.data)
    }

    async function deletefun(id){
        const data=await axios.delete("https://evallobackend-9tvu.onrender.com/teamdelete/"+id)
        setEmployeelist(data.data)
    }

    const nav=useNavigate()

    function editfun(id){
          nav(`/teamedit/${id}`)
    }

    return(
        <div className="employeelistmain">
            <div>
                <div className="employeeadd">
                    <NavLink to="/teamform"><button className="employeebtn">+ Add Team</button></NavLink>
                    <NavLink to="/team"><label className="employeeicon"><BsBoxArrowRight /> Log Out</label></NavLink>
                    </div>
                <div className="employeelist1">
                    <h1 className="employeehead">S.no</h1>
                    <h1 className="employeehead">Name of Team</h1>
                    <h1 className="employeehead">Employee_1</h1>
                    <h1 className="employeehead">Employee_2</h1>
                </div>
                <div className="employeelist3">
                    {
                      employeelist.map((item,index)=>(
                        <div>
                            <div className="employeelist2">
                                <h1 className="employeelisthead">{index+1}</h1>
                                <h1 className="employeelisthead">{item.name}</h1>
                                <h1 className="employeelisthead">{item.employee1}</h1>
                                <h1 className="employeelisthead">{item.employee2}</h1>
                                <h1 className="employeelisthead edit" onClick={()=>editfun(item._id)}><BsPencilSquare /></h1>
                                <h1 className="employeelisthead employeedelete" onClick={()=>deletefun(item._id)}><BsFillTrash3Fill /></h1>
                            </div>
                            <hr/>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamListPage;