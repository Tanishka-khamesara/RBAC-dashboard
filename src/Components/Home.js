import { UserContext } from "./Context/Context";
import { UseContext, useContext } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart,AreaChart, Area,Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, BarChart } from 'recharts';
import React, { PureComponent } from 'react';
import { mockTransactions } from "./Details/Content";
import './Home.css';
function Home() {
    const DataNew = [
        {
            icon: "mail",
            numbers: "12,361",
            title: "Email sent",
            value:"+14%"
        },
        {
            icon: "real_estate_agent",
            numbers: "431,225",
            title: "Sales Obtained",
            value:"+21%"
        },
        {
            icon: "person_add",
            numbers: "32,441",
            title: "New Clients",
            value:"+5%"
        },
        {
            icon: "traffic",
            numbers: "1,325,134",
            title: "Traffic Received",
            value:"+43%"
        },
    ]
    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
        { name: "Jully", Total: 1000 },
        { name: "August", Total: 1900 },
        { name: "September", Total: 3000 },
        { name: "October", Total: 1700 },
        { name: "November", Total: 1500 },
        { name: "December", Total: 3000 },
      ];
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;
    // console.log(userCtx.colors);
    console.log(mockTransactions);
    return (<>
      <div style={{margin:'20px',}}>
            <div style={{lineHeight:'12px',marginTop:'40px'}}>
                <h1>DASHBOARD</h1>
                <p style={{color:userCtx.forwordsgreen}}>Welcome to Tanishka's dashboard</p>
            </div>
            <div class="boxes">
                {
                    DataNew.map((val) => {
                        return (
                            <div className="salebox" style={{ backgroundColor: userCtx.forboxBlue,width:'20%',padding:"20px",lineHeight:'2px',display:'flex',justifyContent:'space-between' }}>
                                <div >
                                <i className="material-icons" style={{ color: userCtx.foricons }}>{val.icon}</i>
                                <h4>{val.numbers}</h4>
                    <p style={{ color: userCtx.forwordsgreen }}>{val.title}</p>
                                </div>
                                <div>
                                <div style={{ width: '70px', height: '70px',alignItems:'center' }}>
                                        <CircularProgressbar className="progress" value={val.value} text={`${val.value}`}  />
    </div>
                                </div>
                            </div>
                       )
                    })
                }
              
            </div>
        </div>
        <div style={{display:"flex"}}>
                 {/* chart */}
        <div className='chart'>
            <AreaChart width={650} height={300} data={data}
        margin={{ top: 2, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            
        </div>
        {/* transictions */}
        <div style={{display:'flex',flexDirection:'column',gap:'12px',width:'34%',height:"280px",overflow:"auto",}} className="scrollerPart">
            <div style={{backgroundColor: userCtx.forboxBlue}}>
                <h3 style={{marginLeft:'10px'}}>Recent Transactions</h3>
            </div>
            {
                mockTransactions.map((val) => {
                    return (
                        <div style={{display:'flex',justifyContent:"space-between",backgroundColor: userCtx.forboxBlue,padding:'3px 10px'}}>
                            <div style={{lineHeight:'4px'}}>
                                <p>{val.txId}</p>
                                <p>{val.user}</p>
                            </div>
                            <div>
                                <p>{val.date }</p>
                            </div>
                            <div >
                                <p style={{ backgroundColor: userCtx.forwordsgreen, padding:'2px'}}>${val.cost}</p>
                            </div>
                        </div>
                   )
                    })
                }
        </div>
        </div>
        
        </>
    )
}
export default Home;