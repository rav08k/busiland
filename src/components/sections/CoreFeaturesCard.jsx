import React from 'react'
import "./CoreFeatures.css"


function CoreFeaturesCard(props) {
  return (
    <div className={'core-features__card '+props.extraClass}>
        <img src={props.img} alt="" className="core-features-card__img" />
        <h1 className="core-features-card__title">{props.title}</h1>
        <p className="core-features-card__para">{props.para}</p>
    </div>
  )
}

export default CoreFeaturesCard