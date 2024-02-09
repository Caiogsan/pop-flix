import { useContext } from "react"
import { MovieContext } from "../helpers/MoviesContext"
const MovieOpen = ({filmName, image, description}) => {
    const {movieData} = useContext(MovieContext)
    return (
        <div className="h-[30em] w-[50em] fixed top-[15%] left-[22%] bg-neutral-700 rounded shadow-md">
            <img src={image}></img>
            <h1>{movieData[0].title}</h1>
            <button onClick={() => {console.log(movieData)}}>tes</button>
            <p>{description}</p>
            <icone></icone>
        </div>
    )
}

export default MovieOpen