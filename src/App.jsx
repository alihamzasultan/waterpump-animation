
import './App.css';
import ImageSlider from './components/comparison/graph';
import HeroVideo from './components/hero/video';
import Linear from './components/linear/linear';


import FloatingNav from './components/navbar/nav';
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
  </div>
  );
}

export default App;
