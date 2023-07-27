import React from 'react'
import "./UpperBox.css"
import Rating from '@mui/material/Rating';

const UpperBox = () => {
    return (
        <div className='main-box'>
            <div className="links">
                <span>Development</span><span> &gt; </span>
                <span>Web Development</span><span> &gt; </span>
                <span>Angular</span>
            </div>
            <div className="main-heading">
                Angular - The Complete Guide (2023 Edition)
            </div>
            <div className="sub-heading">
                Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js
            </div>
            <div className="about">
                <span className='best'>Bestseller</span>
                <span className='rating'> 4.6 {<Rating
                    name="read-only" readOnly
                    value={4} />}</span>
                <span className='totalRatings'>(188,295 ratings)</span>
                <span className="students">697,557 students</span>
            </div>
            <div className="info">
                Created by <a href="/">Glen Maxwell</a>
            </div>
            <div className="lastUpdated">
                <span className='last'>Last updated 6/2023</span>
                <span className='language'>English</span>
                <span className='languageList'>English [CC], Bulgarian [Auto]</span>
                <a href="">22 more</a>
            </div>
        </div>
    )
}

export default UpperBox
