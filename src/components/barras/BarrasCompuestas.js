
// import React from 'react'
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



// const data = [
//   {name:'Pro', age:15, weight:60},
//   {name:'UP', age:20, weight:60},
//   {name:'LI', age:40, weight:60},
//   {name:'IZQ', age:50, weight:60}
// ]

//  const BarrasCompuestas = () => {




//   return (
//     <div>
// <ResponsiveContainer width='100%' aspect={2}>
// <BarChart data={data} width={500} height={300} margin={{top:5, right:30, left:20, botton:5}}>
//   <CartesianGrid strokeDasharray='4 1 2'/>
//   <XAxis dataKey='name'/>
//   <YAxis/>
//   <Tooltip />
//   <Legend/>
//   <Bar dataKey='weight' fill='#6b48ff'/>
//   <Bar dataKey='age' fill='#1ee3cf'/>


// </BarChart >



// </ResponsiveContainer>






//     </div>
//   )
// }


// export default BarrasCompuestas;

import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Libertad avanza', percent: 30.25, fill: '#8A2BE2' }, // L - Violeta
  { name: 'Union por la Patria', percent: 27.15, fill: '#ADD8E6' }, // UP - Azul Claro
  { name: 'Juntos por el Cambio', percent: 28.25, fill: '#FFFF00' }, // JC - Amarillo
];

const CustomYAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
      {`${payload.value}%`}
    </text>
  </g>
);

const CustomXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontWeight="bold" fontSize={14}>
      {payload.value}
    </text>
  </g>
);

const BarrasCompuestas = () => {
  return (
    <div>
<h1 className='text-center text-xl'>LASPASO 2023</h1>

      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data} width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis dataKey="name" tick={<CustomXAxisTick />} />
          <YAxis tick={<CustomYAxisTick />} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="percent" fill="#6b48ff" label={{ position: 'top', formatter: (value) => `${value}%` }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarrasCompuestas;
