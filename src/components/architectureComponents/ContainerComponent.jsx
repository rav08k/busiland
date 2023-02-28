import React from 'react'


function ContainerComponent(props) {
  return (
    <div className={"container " + props.extraClass}>
        {props.children}
    </div>
  )
}

export default ContainerComponent