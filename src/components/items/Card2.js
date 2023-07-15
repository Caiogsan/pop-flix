

function Card2({image, tops}){
    return (
        <div className={`rounded h-52 pr-8 w-84 flex hover:scale-125 duration-500 hover:cursor-pointer`}>
            <img className="h-full w-[40%]" src={tops} alt="Top1"></img>
            <img src={image} alt="Filme" className="h-full rounded   w-[60%]"></img>
        </div>
    )
}

export default Card2