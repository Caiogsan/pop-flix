import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import Mylist from "./pages/Mylist";
import Navbar from "./components/layouts/Navbar";
import { MovieContext } from "./helpers/MoviesContext";
import filme1 from "./img/filme1.jpg";
import filme2 from "./img/filme2.jpg";
import filme3 from "./img/filme3.jpg";
import filme4 from "./img/filme4.jpg";
import filmetop1 from "./img/filmetop1.png";
import filmetop2 from "./img/filmetop2.png";
import filmetop3 from "./img/filmetop3.png";
import filmetop4 from "./img/filmetop4.png";
import filmetop5 from "./img/filmetop5.png";
import filmetop6 from "./img/filmetop6.png";
import filmetop7 from "./img/filmetop7.png";
import filmetop8 from "./img/filmetop8.png";
import filmetop9 from "./img/filmetop9.png";
import filmetop10 from "./img/filmetop10.png";
import filme6 from "./img/filme6.jpg";
import filme7 from "./img/filme7.jpg";
import filme8 from "./img/filme8.jpg";
import filme9 from "./img/filme10.jpg";
import filme10 from "./img/filme11.jpg";
import filme11 from "./img/filme12.jpg";
import filme12 from "./img/filme13.jpg";
import filme13 from "./img/filme14.jpg";
import filme14 from "./img/filme15.jpg";
import filme15 from "./img/filme16.jpg";
import filme16 from "./img/filme17.jpg";
import filme17 from "./img/filme18.jpg";
import filme18 from "./img/filme19.jpg";
import filme19 from "./img/filme20.jpg";
import filme20 from "./img/filme21.jpg";
import filme21 from "./img/filme22.jpg";
import filme22 from "./img/filme23.jpg";
import filme233 from "./img/filme24.2.jpg";
import filme24 from "./img/filme25.jpg";
import filme25 from "./img/filme26.jpg";
import filme26 from "./img/filme27.jpg";
import filme27 from "./img/filme28.jpg";
import filme28 from "./img/filme29.jpg";
import filme29 from "./img/filme30.jpg";
import { useEffect, useState } from "react";
import { getData } from "./data/MoviesData";

function App() {
  const [movieData, setMovieData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const getMovieData = async() => {
    const movieRawData = await getData();
    if(movieRawData.length >= 1){
      setMovieData(movieRawData)
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        isOpen,
        setIsOpen,
        filme1,
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
        filme24,
        filme25,
        filme26,
        filme27,
        filme28,
        filme29,
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
        movieData
      }}
    >
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/pop-flix" exact element={<Home />}></Route>
          <Route path="/series" exact element={<Series />}></Route>
          <Route path="/movies" exact element={<Movies />}></Route>
          <Route path="/trending" exact element={<Trending />}></Route>
          <Route path="/mylist" exact element={<Mylist />}></Route>
        </Routes>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;
