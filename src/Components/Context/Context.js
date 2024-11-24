import { createContext } from "react";
import { useState } from 'react';
import { Content } from "../Details/Content";
export const UserContext = createContext({});

const DataContext = ((props) => {
    const [mode, setMode] = useState(false);
    const [colors, setColors] = useState({
        forboxBlue:"#1F2A40",
        forbgBlue: "#141b2d",
        foricons: "#3da58a",
        forwordsgreen: "#46b59b",
        Searchbox: "#1f2a40",
        forFont:"white",
    });
    const [details, setDetails] = useState(Content);
    const [name, setName] = useState("Sign up");
    // console.log(details);
    return (
        <>
            <UserContext.Provider value={{ colors, setColors, details, setDetails, mode, setMode, name, setName }}>
                {/* {console.log(props)} */}
                {props.children}
        </UserContext.Provider>
        </>
    )
})
export default DataContext;