import React from 'react';
import "./Learn.css";

const Learn = () => {
  return (
    <div className='learnBox'>
      <h1>What you'll learn</h1>
      <div className='specs'>
        <div className="first">
        <p>✔️Develop modern, complex, responsive and scalable web applications with Angular</p>
        <p>✔️Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer</p>
        </div>
        <div className="second">
        <p>✔️Fully understand the architecture behind an Angular application and how to use it</p>
        <p>✔️Create single-page applications with one of the most modern JavaScript frameworks out there</p>
        </div>
      </div>
    </div>
  )
}

export default Learn
