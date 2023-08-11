

import {FaSearch, FaBell} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Navbar(){
   
    return (
        <header className={`flex z-10  w-[100%] top-4 bg-gradient-to-b absolute py-2 top-0`}>
            <div className="flex  h-8 w-[55%]">
                <div className="w-[25%] "><Link to={"/pop-flix"}><div className="bg-logotipo hover:scale-110 duration-500 bg-no-repeat bg-center h-full"></div></Link></div>
                <ul className="flex  text-white text-sm w-[75%] justify-around items-center">     
                    <Link to={"/pop-flix"}><li className='hover:scale-110  duration-500'>Home</li></Link>
                    <Link to={"/series"}><li className='hover:scale-110 duration-500'>TV Shows</li></Link>
                    <Link to={"/movies"}><li className='hover:scale-110 duration-500'>Movies</li></Link>
                    <Link to={"trending"}><li className='hover:scale-110 duration-500'>New & Popular</li></Link>
                    <Link to={"/mylist"}><li className='hover:scale-110 duration-500'>My List</li></Link>
                </ul>
            </div>
            <div className="w-[45%] text-white justify-end gap-6 text-sm pr-12 items-center flex">
                <FaSearch className='hover:scale-125 hover:cursor-pointer duration-500'></FaSearch>
                <a href='/' className='hover:scale-110 duration-500'>Kids</a>
                <FaBell className='hover:scale-125 duration-500'></FaBell>
                <div className='h-7 w-7 hover:scale-110 duration-500 bg-red-500 rounded'></div>
                
            </div>
        </header>
    )
}

export default Navbar