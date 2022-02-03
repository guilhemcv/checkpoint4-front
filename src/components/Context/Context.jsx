/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import { createContext, useState } from 'react';
import axios from 'axios';

export const WineContext = createContext();

export function WineProvider({ children }) {
  const [wines, setWines] = useState();

  const getWines = () => {
    axios.get(`http://${process.env.REACT_APP_PORT}/vin`).then((response) => {
      setWines(response.data);
    });
  };

  return (
    <WineContext.Provider value={{ getWines, wines }}>
      {{ children }}
    </WineContext.Provider>
  );
}
