import React, { useState, useEffect } from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import AnalyticsCard from "./AnalyticsCard";
import "./Analytics.css";

let Data = [
    {num:"99.99%",desc:"Uptime",id:"grid_item1"},
    {num:"16x",desc:"Faster than competitors",id:"grid_item2"},
    {num:"+30%",desc:"Revenue in first month",id:"grid_item3"},
    {num:"5 stars",desc:"Rating from customers",id:"grid_item4"}
]

function AnalyticsSection() {
  let [analyticsCardData, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, [])
  


  return (
    <SectionComponent extraClass="our_analytics">
      <ContainerComponent extraClass="our_analytics__container">
        <div className="our_analytics__title_card">
          <h1 className="global-title">What We Proud Of</h1>
          <p className="big-para-text">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.
          </p>
        </div>
        <div className="our_analytics__grid">
            {
              analyticsCardData.map((ele)=>{
                return(
                  <AnalyticsCard key={ele.id} data={ele} extraClass={ele.id}/>
                )
              })
            }
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default AnalyticsSection;
