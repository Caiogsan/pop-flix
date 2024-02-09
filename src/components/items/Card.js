import { useContext } from "react"
import { MovieContext } from "../../helpers/MoviesContext"

function Card({image}){
    const { setIsOpen, isOpen } = useContext(MovieContext)

    return(
        <div onClick={() => {setIsOpen(!isOpen)}} className={`rounded h-40 w-64 hover:cursor-pointer`}>
            <img src={image} alt="Filme" className="h-full rounded hover:scale-125 duration-500 w-full"></img>
        </div>
    )
}

export default Card