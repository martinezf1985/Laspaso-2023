import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Comuna 1',
    'Jorge Macri': 30.37,
    'Martín Lousteau': 24,
  },
  {
    name: 'Comuna 2',
    'Jorge Macri': 46.38,
    'Martín Lousteau': 25.95,
  },
  {
    name: 'Comuna 3',
    'Jorge Macri': 25.26,
    'Martín Lousteau': 26.72,
  },
  {
    name: 'Comuna 4',
    'Jorge Macri': 21.55,
    'Martín Lousteau': 25.97,
  },
  {
    name: 'Comuna 5',
    'Jorge Macri': 25.62,
    'Martín Lousteau': 28.52,
  },
  {
    name: 'Comuna 6',
    'Jorge Macri': 30.16,
    'Martín Lousteau': 31.27,
  },
  {
    name: 'Comuna 7',
    'Jorge Macri': 24.61,
    'Martín Lousteau': 27.63,
  },
  {
    name: 'Comuna 8',
    'Jorge Macri': 16.68,
    'Martín Lousteau': 25.02,
  },
  {
    name: 'Comuna 9',
    'Jorge Macri': 24.25,
    'Martín Lousteau': 26.39,
  },
  {
    name: 'Comuna 10',
    'Jorge Macri': 26.45,
    'Martín Lousteau': 28.73,
  },
  {
    name: 'Comuna 11',
    'Jorge Macri': 29.52,
    'Martín Lousteau': 29.85,
  },
  {
    name: 'Comuna 12',
    'Jorge Macri': 29.53,
    'Martín Lousteau': 31.93,
  },
  {
    name: 'Comuna 13',
    'Jorge Macri': 29.66,
    'Martín Lousteau': 40.67,
  },
  {
    name: 'Comuna 14',
    'Jorge Macri': 29.24,
    'Martín Lousteau': 40.32,
  },
  {
    name: 'Comuna 15',
    'Jorge Macri': 25.15,
    'Martín Lousteau': 29.30,
  },
];


const LineasPunteadas = () => {
  return (
<div>

  <h1 className='text-center '>JUNTOS POR EL CAMBIO COMUNA POR CUMUNA</h1>
    <ResponsiveContainer width="100%" aspect={2}>
      
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" /> */}
        <Bar dataKey="Jorge Macri" fill="#FFD700" />
  <Bar dataKey="Martín Lousteau" fill="#FF6347" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default LineasPunteadas;
