import React from 'react'
import "./Pricing.css"

function PricingCard(props) {
    let style ={};
                    if (props.data.id == "grid-item2") {
                        style = {background:"rgba(226, 232, 240, 0.5)"};
                    }
  return (
    <div className={'pricing_card__wrapper '+props.extraClass} style={style} >
        <div>
        <h1 className="pricing_card__title">{props.data.title}</h1>
        <p className="pricing_card__sub_title">{props.data.subTitle}</p></div>
        <hr className='pricing_card__line'/>
         <ul>
            {props.data.perksArr.map(item=>{
                return(<li>{item}</li>)
            })}
        </ul>
        <hr className='pricing_card__line'/>
        <span className="pricing_card__pricing">
            <h1 className="pricing_card__pricing_title">${props.data.price}</h1>
            <h3 className="pricing_card__pricing_type">/{props.data.type}</h3>
        </span>
        <button className="global-btn" style={props.data.style}>Get Started</button>
    </div>
  )
}

export default PricingCard