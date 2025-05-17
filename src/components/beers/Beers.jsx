
import BeerItem from '../beerItem/BeerItem'

const Beers = ({ beers, dollarValue }) => {


    const beersMapped = beers.map(beer => (
        <BeerItem
            key={beer.id}
            beerName={beer.beerName}
            beerStyle={beer.beerStyle}
            price={beer.price}
            available={beer.available}
            dollarValue={dollarValue}
        />
    ))

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {beersMapped}
        </div>
    )
}

export default Beers;