import React from 'react'
import ReadMoreReact from 'read-more-react';

const Readmore = () => {
    const [minimumLength, setMinimumLength]=(15)
    const[yourTextHere,setYourTextHere]=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam")
    const [idealLength, setIdealLength]=(15)
const[maxLength,setMaxLength]=(50)
  return (
    <div>
      <ReadMoreReact text={yourTextHere}
                min={minimumLength}
                ideal={idealLength}
                max={maxLength}
                readMoreText="click here to read more"/>
    </div>
  )
}

export default Readmore



// import React, { useState } from "react";
// // import "../App.css";

// const ReadMore = ({ children }) => {
// const text = children;
// const [isReadMore, setIsReadMore] = useState(true);
// const toggleReadMore = () => {
// 	setIsReadMore(!isReadMore);
// };
// return (
// 	<p className="text" style={{cursor:"pointer", color:"red"}}>
// 	{isReadMore ? text.slice(0, 150) : text}
// 	<span onClick={toggleReadMore} className="read-or-hide">
// 		{isReadMore ? "...read more" : " show less"}
// 	</span>
// 	</p>
// );
// };

// const Content = () => {
// return (
// 	<div className="container">
// 	<h2 >
// 		<ReadMore >
// 		GeeksforGeeks: A Computer Science portal for geeks.
// 		It contains well written, well thought and well explained
// 		computer science, programming articles and quizzes.
// 		It provides a variety of services for you to learn, so thrive
// 		and also have fun! Free Tutorials, Millions of Articles, Live,
// 		Online and Classroom Courses ,Frequent Coding Competitions,
// 		Webinars by Industry Experts, Internship opportunities, and Job
// 		Opportunities. Knowledge is power!
// 		</ReadMore>
// 	</h2>
// 	</div>
// );
// };

// export default Content;
