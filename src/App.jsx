
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarPage from './navpage/nav';
import HomePage from './homepage/home';
import EmployeeListPage from './employeelist/employee';
import TeamListPage from './teamlist/team';
import EmployeeSignPage from './employeeSign/employesign';
import EmployeeBoxPage from './employeebox/employeebox';
import EmployeeLoginPage from './employeelogin/employeelogin';
import TeamBoxPage from './teambox/teambox';
import TeamSignPage from './teamsign/teamsign';
import TeamLoginPage from './teamlogin/teamlogin';
import EmployeeFormPage from './employeeform/employeeform';
import EmployeeEditPage from './employeeedit/employeeedit';
import TeamFormPage from './teamform/teamform';
import TeamEditPage from './teamedit/teamedit';

const App=()=>{

  return (
    <>
      <div>
         <BrowserRouter>
           <NavbarPage/>
           <Routes>
              <Route path='/' Component={HomePage}/>
              <Route path='/employee' Component={EmployeeBoxPage}/>
              <Route path='/employeesign' Component={EmployeeSignPage}/>
              <Route path='/employeelogin' Component={EmployeeLoginPage}/>
              <Route path='/employeelist' Component={EmployeeListPage}/>
              <Route path='/team' Component={TeamBoxPage}/>
              <Route path='/teamsign' Component={TeamSignPage}/>
              <Route path='/teamlogin' Component={TeamLoginPage}/>
              <Route path='/teamlist' Component={TeamListPage}/>
              <Route path='/employeeform' Component={EmployeeFormPage}/>
              <Route path='/employeeedit/:id' Component={EmployeeEditPage}/>
              <Route path='/teamform' Component={TeamFormPage}/>
              <Route path='/teamedit/:id' Component={TeamEditPage}/>
           </Routes>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App;
