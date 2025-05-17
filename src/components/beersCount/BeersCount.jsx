const BeersCount = ({ beers }) => {

    const countRed = beers.filter( beer => beer.beerStyle === "Red").length;
    const countIPA = beers.filter( beer => beer.beerStyle === "IPA").length;

  return (
    <div>
        <h2>Conteo de cervezas</h2>
        <p>Estilos red : {countRed}</p>
        <p>Estilos IPA : {countIPA}</p>
    </div>
  );
}

export default BeersCount