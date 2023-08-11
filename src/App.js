import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Series from './components/pages/Series';
import Movies from './components/pages/Movies';
import Trending from './components/pages/Trending';
import Mylist from './components/pages/Mylist';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/pop-flix' exact element={<Home />}></Route>
        <Route path='/series' exact element={<Series />}></Route>
        <Route path='/movies' exact element={<Movies />}></Route>
        <Route path='/trending' exact element={<Trending />}></Route>
        <Route path='/mylist' exact element={<Mylist />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
