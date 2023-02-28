import React from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import revenue_img from "../../assets/revenueImg.png";
import "./RevenueSection.css"

function RevenueSection() {
  return (
    <SectionComponent extraClass="revenue-section">
      <ContainerComponent extraClass="revenue_container">
        <img src={revenue_img} alt="" className="revenue_section__img revenue_grid_item-1" />
        <div className="revenue_section__main_card revenue_grid_item-2" >
          <h1 className="global-title">Increase Revenue up to 60%</h1>
          <p className="big-para-text">
            Vitae, faucibus viverra nullam ridiculus. Dolor nunc, tortor
            pellentesque eleifend. Nam mauris gravida sit vitae consectetur
            mattis. Morbi sed sit habitant metus commodo, turpis. Rhoncus et.
          </p>
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default RevenueSection;
