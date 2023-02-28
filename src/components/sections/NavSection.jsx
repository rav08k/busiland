import React from 'react'
import "./NavSection.css"
import SectionComponent from '../architectureComponents/SectionComponent'
import ContainerComponent from '../architectureComponents/ContainerComponent'
import generic_logo from "../../assets/generic_logo.png"
import { useState } from "react"
import NavMenu from './NavMenu'

function NavSection() {
    let [activeMenu,setActiveMenu] = useState("");
    
    function activeMenuHandler() {
        activeMenu == ""?setActiveMenu("active"):setActiveMenu("");
    }
  return (
    <SectionComponent extraClass="nav-section">
        <ContainerComponent extraClass="nav-container">
            <div className="logo">
                <a href="#home"><img className='logo' src={generic_logo} alt="" /></a>
            </div>
            <div className="nav-menu-wrapper">
                <NavMenu extraClass={activeMenu} acitveHandler={activeMenuHandler}/>
                <button className='nav-btn'>Try for free</button>
                <button className={"nav-ham-img " + activeMenu} onClick={activeMenuHandler}></button>
            </div>
        </ContainerComponent>
    </SectionComponent>
  )
}

export default NavSection