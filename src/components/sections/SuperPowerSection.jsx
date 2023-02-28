import React from 'react'
import ContainerComponent from '../architectureComponents/ContainerComponent'
import SectionComponent from '../architectureComponents/SectionComponent'
import "./SuperPower.css"

function SuperPowerSection() {
  return (
    <SectionComponent extraClass="superpower">
        <ContainerComponent extraClass="superpower_container">
            <h1 className="global-title">Ready to superpower your business?</h1>
            <button className="global-btn">Get started for free</button>
        </ContainerComponent>
    </SectionComponent>
  )
}

export default SuperPowerSection