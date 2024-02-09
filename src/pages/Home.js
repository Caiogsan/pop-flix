import backImage from "../img/back.mp4";
import Card from "../components/items/Card";
import styles from "./Home.module.css";
import Card2 from "../components/items/Card2";
import { useContext } from "react";
import { MovieContext } from "../helpers/MoviesContext";
import MovieOpen from "../components/MovieOpen";

function Home() {
  const {
    isOpen,
    filme1,
    filmetop1,
    filmetop2,
    filmetop3,
    filmetop4,
    filmetop5,
    filmetop6,
    filmetop7,
    filmetop8,
    filmetop9,
    filmetop10,
    filme233,
    filme2,
    filme3,
    filme4,
    filme6,
    filme7,
    filme8,
    filme9,
    filme10,
    filme11,
    filme12,
    filme13,
    filme14,
    filme15,
    filme16,
    filme17,
    filme18,
    filme19,
    filme20,
    filme21,
    filme22,
    filme23,
    filme24,
    filme25,
    filme26,
    filme27,
    filme28,
    filme29,
  } = useContext(MovieContext);

  return (
    <section>
      <div className="h-900 ">
        <video width="100%" height="full" autoPlay loop muted={true}>
          <source src={backImage} type="video/mp4"></source>
        </video>
      </div>
      <div className="absolute text-start bottom-40 pl-12 text-white">
        <p className="text-xl pb-4">
          WATCH OUR LATEST MOVIES & TV SHOWS AVALIABLE!!
        </p>
        <h1 className="text-3xl pb-6 font-extrabold font-filme hover:cursor-pointer duration-500 text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-yellow-400">
          THE LAST FIRECRAFT!!
        </h1>
        <button className="w-36 rounded hover:scale-110 duration-500 bg-gradient-to-r from-red-500 to-transparent text-center p-2">
          WATCH NOW!
        </button>
      </div>
      <div className="h-[1000px] bg-zinc-900">
        <h1 className="text-white absolute top-[700px] pl-12 text-xl">
          Released this year
        </h1>
        <div className="absolute top-[720px]">
          <div
            className={`w-[1335px] ml-2 pl-10 pt-6 h-[250px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}
          >
            <div className={`${styles.teste}`}>
              <Card image={filme1}></Card>
              <Card image={filme2}></Card>
              <Card image={filme3}></Card>
              <Card image={filme4}></Card>
            </div>
            <div className={`${styles.teste}`}>
              <Card image={filme7}></Card>
              <Card image={filme6}></Card>
              <Card image={filme8}></Card>
              <Card image={filme9}></Card>
            </div>
            <div className={`${styles.teste2}`}>
              <Card image={filme10}></Card>
              <Card image={filme11}></Card>
            </div>
          </div>
        </div>
        <h1 className="text-white absolute top-[960px] pl-12 text-xl">
          Trending Right Now
        </h1>
        <div className="absolute top-[980px]">
          <div
            className={`w-[1335px] ml-2 pl-10 pt-6 h-[250px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}
          >
            <div className={`${styles.teste}`}>
              <Card image={filme1}></Card>
              <Card image={filme2}></Card>
              <Card image={filme3}></Card>
              <Card image={filme4}></Card>
            </div>
            <div className={`${styles.teste}`}>
              <Card image={filme7}></Card>
              <Card image={filme6}></Card>
              <Card image={filme8}></Card>
              <Card image={filme9}></Card>
            </div>
            <div className={`${styles.teste2}`}>
              <Card image={filme10}></Card>
              <Card image={filme11}></Card>
            </div>
          </div>
        </div>
        <h1 className="text-white absolute top-[1220px] pl-12 text-xl">
          Top 10 Movies & TW Shows In The World
        </h1>
        <div className="absolute top-[1250px]">
          <div
            className={`w-[1335px] ml-2 pl-10 pt-8 h-[350px] ${styles.scroll} flex gap-x-24 overflow-x-scroll`}
          >
            <div className={`${styles.teste}`}>
              <Card2 image={filme12} tops={filmetop1}></Card2>
              <Card2 image={filme13} tops={filmetop2}></Card2>
              <Card2 image={filme2} tops={filmetop3}></Card2>
              <Card2 image={filme14} tops={filmetop4}></Card2>
            </div>
            <div className={`${styles.teste}`}>
              <Card2 image={filme15} tops={filmetop5}></Card2>
              <Card2 image={filme16} tops={filmetop6}></Card2>
              <Card2 image={filme17} tops={filmetop7}></Card2>
              <Card2 image={filme18} tops={filmetop8}></Card2>
            </div>
            <div className={`${styles.teste2} mr-10 flex gap-12`}>
              <Card2 image={filme19} tops={filmetop9}></Card2>
              <Card2 image={filme20} tops={filmetop10}></Card2>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? <MovieOpen /> : null}
    </section>
  );
}

export default Home;
