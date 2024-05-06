// Data.js

import React from 'react';
import './portfolio.css'; // Import the CSS file

const Folio = () => {
  const text = " We're your one-stop shop for e-commerce success.  Our e-commerce specialists build, promote, and optimize your online store, attracting media and influencers to skyrocket your sales. The result? A thriving brand with boosted value and explosive revenue.";

  // Split text into words
  const words = text.split(/\s+/);

  // Group words into arrays of 5 words
  const groupedWords = [];
  for (let i = 0; i < words.length; i += 10) {
    groupedWords.push(words.slice(i, i + 10).join(' '));
  }

  return (
    <div className="folio-container">
      <div className="folio-content">
        {/* Text content goes here */}
        <h1>Portfolio</h1>
        <h2> Ecommerce Growth. Simplified.
</h2>
        {groupedWords.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
      <img src="/folio.png" alt="Data Analytics" className="folio-image" />
    </div>
  );
};

export default Folio;
