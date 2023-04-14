
const FaveBeersList = ({favouritedBeers}) => {

    if(!favouritedBeers.length) return null

    const mappedFaveBeers = favouritedBeers.map((favbeer, index) => {
        return <li 
        key={index}
        beer={favbeer}>{favbeer}</li>
        })
        console.log(mappedFaveBeers)

    return( 
        <>
        <ul>
            {mappedFaveBeers}
        </ul>
        </>
     );
}
 
export default FaveBeersList;