import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Comuna 1',
      'Jorge Macri': 30.37,
      'Martín Lousteau': 24,
      'Leandro Santoro': 22.18,
      'Ramiro Marra': 15.13,
    },
    {
      name: 'Comuna 2',
      'Jorge Macri': 46.38,
      'Martín Lousteau': 25.95,
      'Leandro Santoro': 12.75,
      'Ramiro Marra': 10.94,
    },
    {
      name: 'Comuna 3',
      'Jorge Macri': 25.26,
      'Martín Lousteau': 26.72,
      'Leandro Santoro': 24.22,
      'Ramiro Marra': 14.95,
    },
    {
      name: 'Comuna 4',
      'Jorge Macri': 21.55,
      'Martín Lousteau': 25.97,
      'Leandro Santoro': 27.15,
      'Ramiro Marra': 15.25,
    },
    {
      name: 'Comuna 5',
      'Jorge Macri': 25.62,
      'Martín Lousteau': 28.52,
      'Leandro Santoro': 25.61,
      'Ramiro Marra': 12.05,
    },
    {
      name: 'Comuna 6',
      'Jorge Macri': 30.16,
      'Martín Lousteau': 31.27,
      'Leandro Santoro': 21.99,
      'Ramiro Marra': 10.24,
    },
    {
      name: 'Comuna 7',
      'Jorge Macri': 24.61,
      'Martín Lousteau': 27.63,
      'Leandro Santoro': 24.06,
      'Ramiro Marra': 14.96,
    },
    {
      name: 'Comuna 8',
      'Jorge Macri': 16.68,
      'Martín Lousteau': 25.02,
      'Leandro Santoro': 27.99,
      'Ramiro Marra': 18.78,
    },
    {
      name: 'Comuna 9',
      'Jorge Macri': 24.25,
      'Martín Lousteau': 26.39,
      'Leandro Santoro': 25.01,
      'Ramiro Marra': 15.60,
    },
    {
      name: 'Comuna 10',
      'Jorge Macri': 26.45,
      'Martín Lousteau': 28.73,
      'Leandro Santoro': 23.60,
      'Ramiro Marra': 13.47,
    },
    {
      name: 'Comuna 11',
      'Jorge Macri': 29.52,
      'Martín Lousteau': 29.85,
      'Leandro Santoro': 21.79,
      'Ramiro Marra': 12.05,
    },
    {
      name: 'Comuna 12',
      'Jorge Macri': 29.53,
      'Martín Lousteau': 31.93,
      'Leandro Santoro': 21.26,
      'Ramiro Marra': 10.98,
    },
    {
      name: 'Comuna 13',
      'Jorge Macri': 29.66,
      'Martín Lousteau': 40.67,
      'Leandro Santoro': 15.10,
      'Ramiro Marra': 10.02,
    },
    {
      name: 'Comuna 14',
      'Jorge Macri': 29.24,
      'Martín Lousteau': 40.32,
      'Leandro Santoro': 15.81,
      'Ramiro Marra': 10.24,
    },
    {
      name: 'Comuna 15',
      'Jorge Macri': 25.15,
      'Martín Lousteau': 29.30,
      'Leandro Santoro': 26.07,
      'Ramiro Marra': 11.33,
    },
  ];
  


const Generales = () => {
  return (
<div>

  <h1 className='text-center '>GENERALES GCBA COMUNA POR COMUNA</h1>
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
  <Bar dataKey="Leandro Santoro" fill="#0000FF" />
<Bar dataKey="Ramiro Marra" fill="#8A2BE2" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Generales;
