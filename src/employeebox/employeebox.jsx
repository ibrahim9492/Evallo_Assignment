import "./employeebox.css"
import { NavLink } from "react-router-dom";

const EmployeeBoxPage=()=>{
    return(
        <div className="boxmain">
            <div>
                <NavLink to="/employeelogin"><p className="boxhead">LOGIN To EmpyoeeList</p></NavLink>
                <p>OR</p>
                <p>If you has no Account ? <NavLink to="/employeesign"><label className="boxhead">SIGN UP</label></NavLink></p>
            </div>
        </div>
    )
}

export default EmployeeBoxPage;