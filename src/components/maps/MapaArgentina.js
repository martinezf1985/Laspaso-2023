import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';

const MapaArgentina = () => {
  const [resultadoActual, setResultadoActual] = useState({
    "Buenos Aires": {
      "partido1": 45,
      "partido2": 35,
      "partido3": 20
    },
    "Córdoba": {
      "partido1": 50,
      "partido2": 30,
      "partido3": 20
    }
  });

  return (
    <div className="flex items-center justify-center space-x-8">
      <img
        src={require('./argentina-map.svg.png').default}
        alt="Argentina Map"
        useMap="#provincias"
        className="max-w-full"
      />
      {resultadoActual && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Resultados de Elecciones</h2>
          {Object.entries(resultadoActual).map(([provincia, resultados]) => (
            <div key={provincia}>
              <h3>{provincia}</h3>
              <ul>
                {Object.entries(resultados).map(([partido, porcentaje]) => (
                  <li key={partido} className="mb-2">
                    {partido}: {porcentaje}%
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <map name="provincias">
        {/* ... Código de las áreas de las provincias ... */}
      </map>
    </div>
  );
};

export default MapaArgentina;
