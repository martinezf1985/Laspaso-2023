
import React from 'react'
import BarrasCompuestas from './components/barras/BarrasCompuestas'
import LineasPunteadas from './components/lineasp/LineasPunteadas';
import Generales from './components/generales/Generales';
 


//import './App.css';

function App() {
  return (
    <div className="App">
{/* <h1 className='text-center text-2x1 leanding-9 font-bold'>Rechart</h1> */}
      <BarrasCompuestas/>
      <LineasPunteadas/>
     <Generales/>
    </div>
  );
}

export default App;
