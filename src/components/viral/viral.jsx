import React, { useState } from 'react';
import './viral.css'; // Import your stylesheet

function Viral() {
  const [slideValue, setSlideValue] = useState(50); // Initial slide value

  const slide = (event) => {
    const value = event.target.value;
    setSlideValue(value);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`
  };

  return (
    
    <div className="viral-outer-container">
      <div className="viral-text-above-container">
        <h1>
        <span className="bold-text"> Viral Growth Mitigates Cost Increases:</span> While rising costs can affect campaign scaling, a viral campaign can help mitigate this impact. The inherent growth of a viral campaign can keep Customer Acquisition Cost (CAC) relatively low, even when factoring in increased expenses for third-party tools and ads.

        </h1>
        <p>Viral Growth</p>
      </div>
      <div className="viral-container">
        <div className="viral-image-container">
          <img src="gg1.jpg" alt="Image 1" />
        </div>
        <div className="viral-image-container">
          <img id="my-jpg" src="gg2.jpg" alt="Image 2" style={clipPathStyle} />
          <div className="text-box left-text-box">
            <p>While an increase in CAC (Customer Acquisition Cost) might slow down the virality timeline slightly, a viral campaign can still achieve its goals much faster than a traditional linear campaign. This is because virality offers exponential growth at a relatively low cost per new customer acquired.(Drag slider across)</p>
          </div>
        </div>
        <div id="viral-slider-container">
          <input type="range" min="0" max="100" defaultValue="50" id="slider" onInput={slide} />
        </div>
      </div>
    </div>
  );
}


export default Viral;
