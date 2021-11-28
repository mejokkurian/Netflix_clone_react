
import './compnent/navbar/Navbar.css';
import './compnent/banner/Banner.css';
import './compnent/rowpost/rowpost.css';
import Navbar from './compnent/navbar/navbar';
import Banner from './compnent/banner/Banner';
import './App.css'
import Rowpost from './compnent/rowpost/Rowpost';
import {originals,actions,RomanceMovies,HorrorMovies,comedy} from './compnent/urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url = {originals} title = 'Netflix orginals' />
      <Rowpost url = {actions} title = 'Actions' isSmall />
      <Rowpost url = {RomanceMovies} title = 'Romance' isSmall />
      <Rowpost url = {HorrorMovies} title = 'Horror' isSmall />
      <Rowpost url = {comedy} title = 'comedy' isSmall />
    </div>
  );
}

export default App;
