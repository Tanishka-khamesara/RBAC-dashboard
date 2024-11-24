import { UserContext } from "./Context/Context";
import { useContext } from "react";

function Navbar() {
    const ctx = useContext(UserContext);
    const colors = ctx.colors;
    const setColors = ctx.setColors;
    const mode = ctx.mode;
    const setMode = ctx.setMode;
    const changeMode = (() => {
        if (mode == true) {
            setColors({
                forboxBlue:"#e0e0e0",
                forwordsgreen: "#70d8bd",
                forbgBlue: "white",
                foricons: "#3da58a",
                forNavicons: "black",
                forFont:"black",
            })
            setMode(false);
        }
        else {
            setColors({
                forboxBlue:"#1F2A40",
                forbgBlue: "#141b2d",
                foricons: "#3da58a",
                forwordsgreen: "#46b59b",
                Searchbox: "#1f2a40",
                forNavicons: "#3da58a",
                forFont:"white",
            })
            setMode(true);
        }
    })
    return (
        <div style={{display:'flex',justifyContent:'space-between', height: "28px",margin:"18px",alignItems: 'center'}}>
            <div style={{ display: "flex", alignItems: 'center', backgroundColor: colors.forboxBlue,height: "40px"}}>
                <input type="text" placeholder="Search" style={{backgroundColor:'transparent',border:"none",outline:'none',}} />
                <button><i className="material-icons">search</i></button>
            </div>
            <div >
                <button onClick={changeMode}><i className="material-icons" style={{color:colors.forNavicons}}>dark_mode</i></button>
                <i className="material-icons" style={{color:colors.forNavicons}}>notifications</i>
                <i className="material-icons" style={{color:colors.forNavicons}}>settings</i>
                <i className="material-icons" style={{color:colors.forNavicons}}>person</i>
                
            </div>
        </div>
    )
}
export default Navbar;