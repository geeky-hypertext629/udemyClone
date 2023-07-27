import React from 'react';
import "./Companies.css";

const Companies = () => {
  return (
    <div className='companyBox'>
      <h3>Top companies offer this course to their employees</h3>
      <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <a href="">Learn More</a></p>
      <div className="banners">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" />
      </div>
    </div>
  )
}

export default Companies
