import React, { useState } from 'react';
import './circuit.css';

const Circuit = () => {
  // State for the series circuit
  const [seriesCurrentImage, setSeriesCurrentImage] = useState('/series-circuit.png');
  const [showSeriesScissors, setShowSeriesScissors] = useState(false);
  const [seriesButtonDisabled, setSeriesButtonDisabled] = useState(false);

  // Function to handle clicking on the series circuit scissors icon
  const handleSeriesScissorsClick = () => {
    setShowSeriesScissors(true);
    setSeriesButtonDisabled(true);
    setTimeout(() => {
      setShowSeriesScissors(false);
      setSeriesCurrentImage('/series-circuit-off.png');
    }, 500);
  };

  // Function to handle clicking on the series circuit change image button
  const handleSeriesChangeImageButtonClick = () => {
    setSeriesCurrentImage('/series-circuit.png');
    setSeriesButtonDisabled(false);
  };

  // State for the parallel circuit
  const [parallelCurrentImage, setParallelCurrentImage] = useState('/parallel-circuit.png');
  const [showParallelScissors, setShowParallelScissors] = useState(false);
  const [parallelButtonDisabled, setParallelButtonDisabled] = useState(false);

  // Function to handle clicking on the parallel circuit scissors icon
  const handleParallelScissorsClick = () => {
    setShowParallelScissors(true);
    setParallelButtonDisabled(true);
    setTimeout(() => {
      setShowParallelScissors(false);
      setParallelCurrentImage('/parallel-circuit - off.png');
    }, 1000);
  };

  // Function to handle clicking on the parallel circuit change image button
  const handleParallelChangeImageButtonClick = () => {
    setParallelCurrentImage('/parallel-circuit.png');
    setParallelButtonDisabled(false);
  };

  return (

    
    <div className="circuit-wrapper">

      {/* Series Circuit */}
      <div className="circuit-box">
        <h1 className="circuit-heading">Series Circuit</h1>
        <img src={process.env.PUBLIC_URL + seriesCurrentImage} alt="Series Current" className="circuit-image" />
        <div className="button-container">
          <button className="circuit-button" onClick={handleSeriesScissorsClick} disabled={seriesButtonDisabled}>
           
            <span className="circuit-button-text">Cut</span>
          </button>
          <button className="change-button" onClick={handleSeriesChangeImageButtonClick}>Fix Circuit</button>
        </div>
        {showSeriesScissors && (
          <img src="/scissors.gif" alt="Scissors" className="scissors-gif" />
        )}
      </div>

      {/* Parallel Circuit */}
      <div className="parallel-box">
        <h1 className="parallel-heading">Parallel Circuit</h1>
        <img src={process.env.PUBLIC_URL + parallelCurrentImage} alt="Parallel Current" className="circuit-image" />
        <div className="button-container">
          <button className="circuit-button" onClick={handleParallelScissorsClick} disabled={parallelButtonDisabled}>
            
            <span className="circuit-button-text">Cut</span>
          </button>
          <button className="change-button" onClick={handleParallelChangeImageButtonClick}>Fix Circuit</button>
        </div>
        {showParallelScissors && (
          <img src="/scissors.gif" alt="Scissors" className="scissors-gif" />
        )}
      </div>
    </div>
  );
};

export default Circuit;
