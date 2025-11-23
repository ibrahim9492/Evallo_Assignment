import "./teambox.css"
import { NavLink } from "react-router-dom";

const TeamBoxPage=()=>{
    return(
        <div className="boxmain">
            <div>
                <NavLink to="/teamlogin"><p className="boxhead">LOGIN To TeamList</p></NavLink>
                <p>OR</p>
                <p>If you has no Account ? <NavLink to="/teamsign"><label className="boxhead">SIGN UP</label></NavLink></p>
            </div>
        </div>
    )
}

export default TeamBoxPage;