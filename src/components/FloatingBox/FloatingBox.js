import React from 'react';
import "./FloatingBox.css";
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const FloatingBox = () => {
  return (
    <div className='box'>
      <div className="videobox">
        <div className="playIcon">
          <PlayCircleFilledWhiteRoundedIcon className='play' />
        </div>
        <div className="preview">
          Preview this course
        </div>
      </div>

      <div className="selectSection">
        <div className="personal">Personal</div>
        <div className="personal">Teams</div>
      </div>
      <hr />
      <div className="purchase">
        <div className="price">
          ₹649 <span className='off'>₹1399</span> <span className='percent'>80% off</span>
        </div>
        <div className="offer">
          <b> <AccessAlarmIcon className='clock' /> 1 day</b> left at this price!
        </div>
        <div className="signup button">Buy This Course</div>
        <div className="purchaseLast">
          <div>30-Day Money-Back Guarantee</div>
          <div>Full Lifetime Access</div>
        </div>
        <div className="courseAction">
          <div className="share">Share</div>
          <div className="gift">Gift this course</div>
          <div className="share">Apply Coupon</div>
        </div>
      </div>
        <hr className='secondhr' />
        <div className="subscribe">
          Subscribe to Udemy’s top courses
        </div>
      <div className="about">
        <p>Get this course, plus 8,000+ of our top-rated courses, with Personal Plan .<a href="">Learn More</a></p>
      </div>
      <div className="signup button secondbtn">Start subscription</div>
        <div className="purchaseLast">
          <div>Starting at ₹750 per month</div>
          <div className='cancel'>Cancel anytime</div>
        </div>
    </div>
  )
}

export default FloatingBox
