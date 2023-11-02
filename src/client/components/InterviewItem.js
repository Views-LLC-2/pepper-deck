

import './InterviewItem.css'

const InterviewItem = (props) => {
 return(
    <div className="itemContainer relative flex w-96 rounded-md bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="interviewDate">{props.date}</div>
      <div className="companyNameTitle">{props.company}</div>
      <div className="positionTitle">{props.position}</div>
    </div>
 )
}

// function interviewItem() {
//   return( <div className="itemContainer">
//     <div className="companyNameTitle">Facebook</div>
//     <div className="interviewDate">10/31</div>
//     <div className="positionTitle">Front-end Engineer</div>
//   </div>
//  )
// }

export default InterviewItem;