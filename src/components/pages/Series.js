import backImage from "../../img/fundo2.mp4"
import Card from "../items/Card"
import filme1 from "../../img/filme1.jpg"
import filme2 from "../../img/filme2.jpg"
import filme3 from "../../img/filme3.jpg"
import filme4 from "../../img/filme4.jpg"
import filmetop1 from "../../img/filmetop1.png"
import filmetop2 from "../../img/filmetop2.png"
import filmetop3 from "../../img/filmetop3.png"
import filmetop4 from "../../img/filmetop4.png"
import filmetop5 from "../../img/filmetop5.png"
import filmetop6 from "../../img/filmetop6.png"
import filmetop7 from "../../img/filmetop7.png"
import filmetop8 from "../../img/filmetop8.png"
import filmetop9 from "../../img/filmetop9.png"
import filmetop10 from "../../img/filmetop10.png"
import filme6 from "../../img/filme6.jpg"
import filme7 from "../../img/filme7.jpg"
import filme8 from "../../img/filme8.jpg"
import filme9 from "../../img/filme10.jpg"
import filme10 from "../../img/filme11.jpg"
import filme11 from "../../img/filme12.jpg"
import filme12 from "../../img/filme13.jpg"
import filme13 from "../../img/filme14.jpg"
import filme14 from "../../img/filme15.jpg"
import filme15 from "../../img/filme16.jpg"
import filme16 from "../../img/filme17.jpg"
import filme17 from "../../img/filme18.jpg"
import filme18 from "../../img/filme19.jpg"
import filme19 from "../../img/filme20.jpg"
import filme20 from "../../img/filme21.jpg"
import filme21 from "../../img/filme22.jpg"
import filme22 from "../../img/filme23.jpg"
import filme233 from "../../img/filme24.2.jpg"
import filme24 from "../../img/filme25.jpg"
import filme25 from "../../img/filme26.jpg"
import filme26 from "../../img/filme27.jpg"
import filme27 from "../../img/filme28.jpg"
import filme28 from "../../img/filme29.jpg"
import filme29 from "../../img/filme30.jpg"
import styles from "./Home.module.css"
import Card2 from "../items/Card2"

function Series(){
    const lista = [`${filme1}`, `${filme2}`, `${filme3}`, `${filme4}`, `${filme6}`, `${filme7}`, `${filme8}`, `${filme9}`, `${filme10}`, `${filme11}`, `${filme12}`, `${filme13}`, `${filme14}`, `${filme15}`, `${filme16}`, `${filme17}`, `${filme18}`, `${filme19}`, `${filme20}`, `${filme21}`, `${filme22}`, `${filme233}`, `${filme24}`, `${filme25}`, `${filme26}`, `${filme27}`, `${filme28}`, `${filme29}`]
    const lista2 = [`${filmetop1}`, `${filmetop2}`, `${filmetop3}`, `${filmetop4}`, `${filmetop5}`, `${filmetop6}`, `${filmetop7}`, `${filmetop8}`, `${filmetop9}`, `${filmetop10}`]
    return (
        <section>
            <div className="h-900 ">
                <video width="100%" height="full" autoPlay loop muted={true}>
                    <source src={backImage} type="video/mp4" ></source>
                </video>               
            </div>
            <div className="absolute text-start bottom-40 pl-12 text-white">
                <p className="text-xl pb-4">WATCH OUR LATEST TV SHOW AVALIABLE!!</p>
                <h1 className="text-3xl pb-6 font-extrabold font-filme hover:scale-110 hover:cursor-pointer duration-500 text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-yellow-950">THE FORGOTTEN PASSAGE!!</h1>
                <button className="w-36 rounded hover:scale-110 duration-500 bg-gradient-to-r from-orange-800 to-transparent text-center p-2">WATCH NOW!</button>
            </div>
            <div className="h-[1000px] bg-zinc-900">
                <h1 className="text-white absolute top-[660px] pl-12 text-xl">Most watched TV Shows of all time</h1>
                <div className="absolute top-[680px]">                 
                    <div className={`w-[1335px] ml-2 pl-10 pt-6 h-[250px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}>
                        <div className={`${styles.teste}`}>
                            <Card image={lista[0]}></Card>
                            <Card image={lista[1]}></Card>
                            <Card image={lista[2]}></Card>
                            <Card image={lista[3]}></Card>             
                        </div>
                        <div className={`${styles.teste}`}>
                            <Card image={lista[4]}></Card>
                            <Card image={lista[5]}></Card>
                            <Card image={lista[6]}></Card>
                            <Card image={lista[7]}></Card>                           
                        </div>
                        <div className={`${styles.teste2}`}>
                            <Card image={lista[16]}></Card>
                            <Card image={lista[17]}></Card>                                                    
                        </div>
                    </div>
                </div>
                <h1 className="text-white absolute top-[920px] pl-12 text-xl">Trending Right Now</h1>
                <div className="absolute top-[940px]">
                    <div className={`w-[1335px] ml-2 pl-10 pt-6 h-[250px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}>
                        <div className={`${styles.teste}`}>
                            <Card image={lista[8]}></Card>
                            <Card image={lista[9]}></Card>
                            <Card image={lista[10]}></Card>
                            <Card image={lista[11]}></Card>                  
                        </div>
                        <div className={`${styles.teste} `}>
                            <Card image={lista[12]}></Card>
                            <Card image={lista[13]}></Card>
                            <Card image={lista[14]}></Card>
                            <Card image={lista[15]}></Card>
                        </div>
                        <div className={`${styles.teste2} mr-10`}>
                            <Card image={lista[18]}></Card>
                            <Card image={lista[20]}></Card>                                                    
                        </div>
                    </div>
                </div>
                <h1 className="text-white absolute top-[1180px] pl-12 text-xl">Top 10 TV Shows In The World Right Now</h1>
                <div className="absolute top-[1210px]">
                    <div className={`w-[1335px] ml-2 pl-10 pt-8 h-[350px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}>
                        <div className={`${styles.teste}`}>
                            <Card2 image={lista[21]} tops={lista2[0]}></Card2>
                            <Card2 image={lista[22]} tops={lista2[1]}></Card2>
                            <Card2 image={lista[23]} tops={lista2[2]}></Card2>
                            <Card2 image={lista[24]} tops={lista2[3]}></Card2>                  
                        </div>
                        <div className={`${styles.teste}`}>
                            <Card2 image={lista[25]} tops={lista2[4]}></Card2>
                            <Card2 image={lista[26]} tops={lista2[5]}></Card2>
                            <Card2 image={lista[27]} tops={lista2[6]}></Card2>
                            <Card2 image={lista[13]} tops={lista2[7]}></Card2>
                        </div>
                        <div className={`${styles.teste2} mr-10 flex gap-12`}>
                            <Card2 image={lista[14]} tops={lista2[8]}></Card2>
                            <Card2 image={lista[5]} tops={lista2[9]}></Card2>                                                    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Series