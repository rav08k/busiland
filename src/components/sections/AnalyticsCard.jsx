import React from 'react'

function AnalyticsCard(props) {
  return (
    <div className={'analytics_card__wrapper '+ props.extraClass}>
        <h1 className="analytics_card__num">{props.data.num}</h1>
        <p className="analytics_card__desc">{props.data.desc}</p>
    </div>
  )
}

export default AnalyticsCard