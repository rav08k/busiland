import React from 'react'


function SectionComponent(props) {
    
  return (
    <div className={"section "+props.extraClass} id={props.id}>
        {props.children}
    </div>
  )
}

export default SectionComponent