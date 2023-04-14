
const BeerDescription = ({selectedBeer, handleFavouritedBeer}) => {
    if (!selectedBeer) return

    const handleFav = (event) => {
        const chosenFavBeer = event.target.value
        // console.log(event.target.value)
        console.log(chosenFavBeer)
        handleFavouritedBeer(chosenFavBeer)
    }
    return ( 
        <div>
            {/* <h1>desc</h1> */}
            <h3>{selectedBeer.name}</h3>
            <h4>{selectedBeer.tagline}</h4>
            <img src={selectedBeer.image_url} height="200px"/>
            <p>{selectedBeer.description}</p>
            <button onClick={handleFav} value={selectedBeer.name}> Add as favourite! </button>
        </div>
     );
}
 
export default BeerDescription;