const BeersAvailable = ({ beers }) => {
    const availableBeers = beers.filter( beer => beer.available);
  return (
    <div>
        <h1>Cervezas Disponibles</h1>
        <ul>
            {availableBeers.map( beer => (
                <li key={beer.id}>
                    {beer.beerName} - {beer.beerStyle}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BeersAvailable