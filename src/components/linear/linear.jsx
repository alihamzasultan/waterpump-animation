import React, { useState } from 'react';
import './linear.css'; // Import your stylesheet

function Linear() {
  const [slideValue, setSlideValue] = useState(50); // Initial slide value

  const slide = (event) => {
    const value = event.target.value;
    setSlideValue(value);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`
  };

  return (
    
    <div className="linear-outer-container" id="linear-section">
      <div className="linear-text-above-container">
        <h1>
        <span className="bold-text"> The Impact of Rising CAC In A Conventional Lead Gen Campaign:</span>This graph illustrates a critical challenge when costs and expenses go up, your Customer Acquisition Cost (CAC) increases. This means you reach fewer potential customers with the same marketing budget.
        </h1>
        <p>Linear Growth</p>
      </div>
      <div className="linear-container">
        <div className="linear-image-container">
          <img src="gg1.jpg" alt="Image 1" />
        </div>
        <div className="linear-image-container">
          <img id="my-jpg" src="gg2.jpg" alt="Image 2" style={clipPathStyle} />
          <div className="text-box left-text-box">
            <p>An increase in expenditure can impede the linear growth trajectory of a campaign.
(Drag slider across)</p>
          </div>
        </div>
        <div id="linear-slider-container">
          <input type="range" min="0" max="100" defaultValue="50" id="slider" onInput={slide} />
        </div>
      </div>
    </div>
  );
}


export default Linear;
