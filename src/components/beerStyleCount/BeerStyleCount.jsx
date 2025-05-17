const BeerStyleCount = ({ beers }) => {

    const beerStylesCount = [...new Set(beers.map(beer => beer.beerStyle))];

  return (
    <div>
        <h2>Estilos de Cervezas</h2>
        <ul>
            {beerStylesCount.map((style, idx) => (
                <li key={idx}>{style}</li>
            ))}
        </ul>
    </div>
  )
}

export default BeerStyleCount