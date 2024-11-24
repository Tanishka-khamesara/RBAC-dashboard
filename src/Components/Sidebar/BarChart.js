import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { UserContext } from '../Context/Context';
import { useContext } from 'react';

function Barchart() {
    const Ctx = useContext(UserContext);
    const useCtx = Ctx.colors;
    return (
        <div style={{color:'white',margin:"30px auto"}} >
            <BarChart 
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={700}
                height={500}
                
    />
        </div>
    )
}
export default Barchart ;