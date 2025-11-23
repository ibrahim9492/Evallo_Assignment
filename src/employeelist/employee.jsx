import { useEffect, useState } from "react";
import "./employee.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const EmployeeListPage=()=>{

    const [employeelist,setEmployeelist]=useState([])

    useEffect(()=>{
        listfun()
    },[])

    async function listfun(){
          const data=await axios.get("https://evallobackend-9tvu.onrender.com/employeelist")
          setEmployeelist(data.data)
    }

    async function deletefun(id){
        const data=await axios.delete("https://evallobackend-9tvu.onrender.com/employeedelete/"+id)
        setEmployeelist(data.data)
    }

    const nav=useNavigate()

    function editfun(id){
          nav(`/employeeedit/${id}`)
    }

    return(
        <div className="employeelistmain">
            <div>
                <div className="employeeadd">
                    <NavLink to="/employeeform"><button className="employeebtn">+ Add Employee</button></NavLink>
                    <NavLink to="/employee"><label className="employeeicon"><BsBoxArrowRight /> Log Out</label></NavLink>
                    </div>
                <div className="employeelist1">
                    <h1 className="employeehead">S.no</h1>
                    <h1 className="employeehead">Name of Emloyee</h1>
                    <h1 className="employeehead">Role</h1>
                    <h1 className="employeehead">Gmail</h1>
                </div>
                <div className="employeelist3">
                    {
                      employeelist.map((item,index)=>(
                        <div>
                            <div className="employeelist2">
                                <h1 className="employeelisthead">{index+1}</h1>
                                <h1 className="employeelisthead">{item.name}</h1>
                                <h1 className="employeelisthead">{item.role}</h1>
                                <h1 className="employeelisthead">{item.gmail}</h1>
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

export default EmployeeListPage;