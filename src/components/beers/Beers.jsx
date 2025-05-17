
import BeerItem from '../beerItem/BeerItem'

const Beers = ({ beers }) => {

    const usdToArs = 900;

    const beersMapped = beers.map(beer => (
        <BeerItem
            key={beer.id}
            beerName={beer.beerName}
            beerStyle={beer.beerStyle}
            price={beer.price * usdToArs}
            available={beer.available}
        />
    ))

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {beersMapped}
        </div>
    )
}

export default Beers;