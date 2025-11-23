import "./nav.css"
import { NavLink } from "react-router-dom";

const NavbarPage=()=>{
    return(
        <div>
           <div className="navmain">
            <h1 className="navhead1">Evallo</h1>
            <NavLink to="/"><h1 className="navhead">HOME</h1></NavLink>
            <NavLink to="/employee"><h1 className="navhead">EMPLOYEE</h1></NavLink>
            <NavLink to="/team"><h1 className="navhead">TEAM</h1></NavLink>
           </div>
        </div>
    )
}

export default NavbarPage;