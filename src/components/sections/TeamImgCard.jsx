import React from 'react'
import "./TeamsSection.css";

function TeamImgCard(props) {
  return (
    <div className={props.extraClass + " team_img_card"}>
        <img src={props.data.img} alt="" className='teams_card__img' />
        <div className="teams_card_overlay">
            <div className="teams_card__text">
                <h1 className="teams_card__name">{props.data.name}</h1>
                <p className="teams_card__designation">{props.data.designation}</p>
            </div>
        </div>

    </div>
  )
}

export default TeamImgCard