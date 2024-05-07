// Data.js

import React from 'react';
import './data.css'; // Import the CSS file

const Data = () => {
  const text = " Our team thrives on leveraging data insights. We meticulously analyze campaign performance to identify optimization opportunities, maximizing viral potential and minimizing Customer Acquisition Cost (CAC) to drive sustainable viral growth. Analytics";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 5 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 9) {
    groupedWords.push(words.slice(i, i + 9).join(' '));
  }

  return (
    <div className="data-container" id="data-section">
      <div className="text-content">
        {/* Text content goes here */}
        <h1>We are data geeks</h1>
        {groupedWords.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
      <img src="/data.png" alt="Data Analytics" className="data-image" />
    </div>
  );
};

export default Data;
