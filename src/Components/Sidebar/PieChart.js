import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'Out of India' },
  { id: 1, value: 15, label: 'In India' },
  { id: 2, value: 20, label: 'Others' },
];

function PieChart2() {
    const xAxisStyles = {
        fill: 'red', // Change 'red' to your desired font color
    };

    return (
        <PieChart
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={400}
            theme={{
                xAxis: {
                    style: {
                        text: xAxisStyles,
                    },
                },
            }}
        />
    );
}

export default PieChart2;
