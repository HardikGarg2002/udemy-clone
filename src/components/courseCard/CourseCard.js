import React from 'react'
import './courseCard.css'
import star from '../../assets/images/star.png'
function CourseCard(props) {
  return (
    <>
    <div className='courseCard flex'>
      <img src={props.src} />
      <div className='info-area'>
        <h3>{props.heading}</h3>
        
        <p dangerouslySetInnerHTML={{ __html: props.text }} />
        <p className='courseCard__createdby'>CreatedBy {props.CreatedBy}</p>
        <div className='flex courseCard_stars'>{props.rating}
          <img src={star} className='courseCard__star'/>
          <img src={star} className='courseCard__star'/>
          <img src={star} className='courseCard__star'/>
          <img src={star} className='courseCard__star'/>
          <img src={star} className='courseCard__star'/>
        
        </div>
        <div className='flex courseCard__hours'>
          <p>{props.hours} total hours</p>
          <p>{props.lectures} lectures</p>
          <p>{props.level}</p>
        </div>
      </div>
      <div className='course-prices'>
        <h2>₹{props.Currentprice}</h2>
        <p className='cut'>₹{props.Originalprice}</p>
      </div>
      
    </div>
      <hr/>
    </>
  )
}

export default CourseCard
