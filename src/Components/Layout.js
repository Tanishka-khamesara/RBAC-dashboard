import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Context/Context";
import { useContext } from "react";

function Layout() {
    const ctx = useContext(UserContext);
    const colors = ctx.colors;
    return (
        <>
            <div style={{display:"flex",backgroundColor:colors.forbgBlue,color:colors.forFont}}>
                <div style={{width:'20%'}}>
                    <Sidebar/>
                </div>
                <div style={{width:'80%'}}>
                    <Navbar />
                   <Outlet/>
                </div>
            </div>
           
        </>
    )
}
export default Layout;