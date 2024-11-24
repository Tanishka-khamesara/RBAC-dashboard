import { LineChart,AreaChart, Area,Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
function homeChart() {
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
    return (
        <div className='chart'>
            <div>
                <h1>Line Chart</h1>
            </div>
            <AreaChart width={1000} height={500} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
            <div style={{display:'flex',justifyContent:"center"}}>Last 12 Months(Revenue)</div>
        </div>

    );
}
export default homeChart;