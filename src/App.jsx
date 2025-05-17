
import './App.css'
import Beers from './components/beers/Beers'
import BeersAvailable from './components/beersAvailable/BeersAvailable'
import BeersCount from './components/beersCount/BeersCount'
import BeerStyleCount from './components/beerStyleCount/BeerStyleCount'
import { beers } from './data/beers'

const App = () => {
return (
    <>
    <h1>Beers</h1>
    <Beers beers= {beers}/>
    <BeersAvailable beers={beers}/>
    <BeersCount beers={beers}/>
    <BeerStyleCount beers={beers}/>
    </>
  )
}

export default App
