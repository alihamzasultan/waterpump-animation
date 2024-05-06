
import './App.css';
import Circuit from './components/circuit/circuit';
import ImageSlider from './components/comparison/graph';
import Data from './components/data/data';
import HeroVideo from './components/hero/video';
import Linear from './components/linear/linear';


import FloatingNav from './components/navbar/nav';
import Folio from './components/portfolio/portfolio';
import Time from './components/time/time';
import Viral from './components/viral/viral';
import WaterPump from './components/waterpump/pump';

function App() {
  return (
    <div>
    {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}

  <FloatingNav/>
  <HeroVideo/>


  <WaterPump />


  <ImageSlider/>
  <Linear/>
  <Viral/>
  <Data/>
  <Time/>
  <Folio/>
  <Circuit/>
  </div>
  );
}

export default App;
