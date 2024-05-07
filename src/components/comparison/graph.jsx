import React, { useState } from 'react';
import './graph.css'; // Import your stylesheet

function ImageSlider() {
  const [slideValue, setSlideValue] = useState(50); // Initial slide value

  const slide = (event) => {
    const value = event.target.value;
    setSlideValue(value);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`
  };

  return (
    
    <div className="outer-container " id="image-slider-section">
      <div className="text-above-container">
        <h1>
          Why have linear growth when you can have viral growth right from the start? 
          Reducing CAC and <span className="bold-text">increasing ROAS by as much as 20x!</span>
        </h1>
        <p>Linear x Viral</p>
      </div>
      <div className="container">
        <div className="image-container">
          <img src="gg1.jpg" alt="Image 1" />
        </div>
        <div className="image-container">
          <img id="my-jpg" src="gg2.jpg" alt="Image 2" style={clipPathStyle} />
          <div className="text-box left-text-box">
            <p>Difference between a Viral Campaign and a Linear Lead Gen Campaign. (Drag slider across)</p>
          </div>
        </div>
        <div id="slider-container">
          <input type="range" min="0" max="100" defaultValue="50" id="slider" onInput={slide} />
        </div>
      </div>
    </div>
  );
}


export default ImageSlider;
