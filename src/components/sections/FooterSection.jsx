import React from 'react'
import ContainerComponent from '../architectureComponents/ContainerComponent'
import SectionComponent from '../architectureComponents/SectionComponent'
import "./Footer.css"

import fb from "../../assets/facebook.png";
import pi from "../../assets/pinterest.png";
import li from "../../assets/linkedin.png";
import ti from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import logo from "../../assets/generic_logo.png";

function FooterSection() {
  return (
    <SectionComponent extraClass="footer">
        <ContainerComponent extraClass="footer_container">
            <div className="footer_top">
                <img src={logo} alt="" className='footer_logo'/>
                <ul className="footer_links">
                    <li><a href=""><img src={fb} alt="" /></a></li>
                    <li><a href=""><img src={pi} alt="" /></a></li>
                    <li><a href=""><img src={li} alt="" /></a></li>
                    <li><a href=""><img src={ti} alt="" /></a></li>
                    <li><a href=""><img src={insta} alt="" /></a></li>
                </ul>
            </div>
            <div className="footer_bottom">
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">License & Changelog</a></li>
            <li><a href="">Styleguide</a></li>
            </div>
        </ContainerComponent>
    </SectionComponent>
  )
}

export default FooterSection