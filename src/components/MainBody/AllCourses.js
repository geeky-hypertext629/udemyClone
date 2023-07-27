import * as React from 'react';
import CardComponent from "./CardComponent/CardComponent.js";
import "./AllCourses.css";
import course1 from "./../MainBody/Images/course1.png";
import course2 from "./../MainBody/Images/course2.png";
import course3 from "./../MainBody/Images/course3.png";

let des1 = "React - The complete guide 2023";
let des2 = "Flutter and Dart - The complete guide 2023"
let des3 = "NodeJs - The complete guide 2023"

let name1 = "React";
let name2 = "Flutter";
let name3 = "NodeJs";

export default function AllCourses() {
  return (
    <div className='cards'>
    <CardComponent name={name1} image={course1} des={des1}  className="course" />
    <CardComponent name={name2} image={course2}  des={des2} className="course"/>
    <CardComponent name={name3} image={course3} des={des3}  className="course"/>
    </div>
  );
}