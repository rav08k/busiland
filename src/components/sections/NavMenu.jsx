import React, { useEffect, useState } from 'react'
import "./NavSection.css"

function NavMenu(props) {
 
  let clickHandler = (event)=>{
    let siblings = event.target.parentElement.parentElement.children;
    let parentId = event.target.parentElement.id
    for (let i = 0; i < siblings.length; i++) {
      if (parentId == siblings[i].id) {
        siblings[i].classList.add("active");
      }else{
        siblings[i].classList.remove("active");
      }
    }
    setTimeout(() => {
      props.acitveHandler();
    }, 300);
  }
  return (
    <ul className={'nav-menu ' + props.extraClass}>
                    <li id="menu-home" className='nav-menu-items active'><a href="#home" target="_self" rel="" onClick={clickHandler}>Home</a></li>
                    <li id="menu-features" className='nav-menu-items'><a href="#core_features" target="_self" rel="" onClick={clickHandler}>Core Features</a></li>
                    <li id="menu-team" className='nav-menu-items'><a href="#team" target="_self" rel="" onClick={clickHandler}>Our Team</a></li>
                    <li id="menu-pricing" className='nav-menu-items'><a href="#pricing" target="_self" rel="" onClick={clickHandler}>Pricing</a></li>
                    <li id="menu-faqs" className='nav-menu-items'><a href="#faqs" target="_self" rel="" onClick={clickHandler}>Faqs</a></li>
    </ul>
  )
}

export default NavMenu