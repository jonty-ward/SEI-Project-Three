import React from 'react'

const Recommendations = ({ parkName, activity, text, image }) => {

  return (
    <div className="box">
      <h3>Park: {parkName}</h3>
      <h4>Activity: {activity}</h4>
      <h4>Comments: {text}</h4>
      <div>
        {image}
      </div>
    </div>
  )
}

export default Recommendations

// * we'll probs amend how we display the above once we've seen it on the page, this is just for now to check it's all working
// * whether we include the parkName or it's already pre-populated on the form is something we'll need to look at
// * As with comments the below will need to be detailed on parks info page:

{/* <div className="box">
{ recommendations.map(recommendation => (
  <Recommendations key={recommendation._id} {...recommendation}/>
  
))}
</div>  */}