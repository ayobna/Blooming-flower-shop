import React from 'react'
import { withRouter } from 'react-router-dom';
import FeedbackInfo from './FeedbackInfo';
import {FeedImg,FeedDate,FeedCon,FeedbackTitle,FeedConteiner,NoFeedbackTitle} from './style'
function index(props) {



  return (
    <FeedConteiner>
      <FeedbackTitle>Our Store Feedbacks:</FeedbackTitle>
{props.location.state.feedback===null&&<NoFeedbackTitle>There Are No FeedBack Yet</NoFeedbackTitle>}
      {props.location.state.feedback!==null&&props.location.state.feedback.map((feed, index) =>
        <FeedCon key={index}>
          <FeedDate>Created On: {feed.Date}</FeedDate><br />
          <FeedImg src={feed.Img}  alt="" />
       {feed.Name} <br />
          {feed.NewFeedback} <br/>
       <FeedbackInfo  feedInfo={feed}  tools={props.location.state.tools} bouquets={props.location.state.bouquets} planting={props.location.state.planting}/>
       <br />
        </FeedCon>

      )}
    </FeedConteiner>
  )
}

export default withRouter(index)
