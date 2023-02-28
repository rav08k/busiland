import React from 'react'
// import "./ArchitectureComponents.css"

function CardComponent(props) {
  return (
    <div className={"global-cards "+props.extraClass}>
        {props.children}
    </div>
  )
}

export default CardComponent