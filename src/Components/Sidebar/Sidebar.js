import './Sidebar.css';
import { Link,useNavigate} from "react-router-dom";
import { UserContext } from '../Context/Context';
import { useContext, useState } from 'react';
import SignUp from '../../SignUp';


function Sidebar() {
    const ctx = useContext(UserContext);
    const useCtx = ctx.color;
    const name = ctx.name;
    const navigate=useNavigate();
    return (
        <div class="sidebar" >
            <div class="topper">
                <button onClick={() => { navigate("/SignUp") }} style={{backgroundColor:"#3da58a",padding:"10px",marginLeft:"120px"}}>{name}</button>
                {/* <h3>Tanishka Khameshara</h3> */}
            </div>
            <div className='toShow'>
                <ul>
                <li> <Link to="/"><i className="material-icons">dashboard</i><span>DashBoard</span></Link></li>    
                </ul>
            </div>
            <div className='toShow'>
                <h3 >Data</h3>
                <ul >
                <li> <Link to="/ManageTeam"><i className="material-icons">group</i><span>Manage Team</span></Link></li>    
               
                </ul>
            </div>
            <div className='toShow'>
                <h3>Pages</h3>
                <ul>
                
                <li> <Link to="/Calendar"><i className="material-icons">calendar_month</i><span>Calendar</span></Link></li>    
                
                </ul>
            </div>
            <div className='toShow'>
                <h3>Charts</h3>
                <ul>
                <li> <Link to="/BarChart"><i className="material-icons">bar_chart</i><span>Bar Chart</span></Link></li>
                    <li> <Link to="/PieChart"><i className="material-icons">pie_chart</i><span>Pie Chart</span></Link></li>    
                    <li> <Link to="/LineChart"><i className="material-icons">stacked_line_chart</i><span>Line Chart</span></Link></li>     
                    
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;