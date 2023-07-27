import React from 'react'
import Learn from "./Learn.js";
import Syllabus from "./Syllabus.js";
import Companies from "./Companies.js";
import Contents from "./Contents.js";
import Requirement from "./Requirement.js"
import Description from "./Description.js";
import Audience from "./Audience.js";
import Review from "./Review.js"
import AllCourses from "./AllCourses.js";


const MainBody = () => {
  return (
    <div>
      <Learn/>
      <Syllabus />
      <Companies />
      <Contents />
      <Requirement />
      <Description />
      <Audience />
      <Review />
      <AllCourses />
    </div>
  )
}

export default MainBody
