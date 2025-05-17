
import './App.css'
import Beers from './components/beers/Beers'
import BeersAvailable from './components/beersAvailable/BeersAvailable'
import BeersCount from './components/beersCount/BeersCount'
import BeerStyleCount from './components/beerStyleCount/BeerStyleCount'
import ChangeDolar from './components/changeDolar/ChangeDolar'
import { beers } from './data/beers'
import { useState } from 'react';

const App = () => {

   const [dollarValue, setDollarValue] = useState(1); // valor inicial

   const [showDollarInput, setShowDollarInput] = useState(true);

   const toggleDollarInput = () => {
    setShowDollarInput(prev => !prev);
  };

return (
    <>
    <h1>Beers</h1>
    <Beers beers= {beers} dollarValue={dollarValue}/>
    <BeersAvailable beers={beers}/>
    <BeersCount beers={beers}/>
    <BeerStyleCount beers={beers}/>

    <button onClick={toggleDollarInput}>
        {showDollarInput ? "Ocultar cambio de dólar" : "Mostrar cambio de dólar"}
      </button>

      {showDollarInput && (
        <ChangeDolar
          dollarValue={dollarValue}
          setDollarValue={setDollarValue}
        />
      )}
    </>
  )
}

export default App
