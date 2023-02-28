import React, { useEffect, useState } from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import "./CoreFeatures.css";
import CoreFeaturesCard from "./CoreFeaturesCard";
import cardImg1 from "../../assets/featureCard1.svg";
import cardImg2 from "../../assets/featureCard2.svg";
import cardImg3 from "../../assets/featureCard3.svg";
import cardImg4 from "../../assets/featureCard4.svg";

let cards = [
  {img:cardImg1,title:"Checkout",para:"Congue in in convallis tortor, interdum consectetur sagittis. Ipsum morbi eu."},
  {img:cardImg2,title:"Payments",para:"Congue in in convallis tortor, interdum consectetur sagittis. Ipsum morbi eu."},
  {img:cardImg3,title:"Subscriptions",para:"Congue in in convallis tortor, interdum consectetur sagittis. Ipsum morbi eu."},
  {img:cardImg4,title:"Tax compliance",para:"Congue in in convallis tortor, interdum consectetur sagittis. Ipsum morbi eu."}
];

function CoreFeaturesSection() {
  const [features_cards,setCards]=useState([]);
  useEffect(()=>{
    setCards(cards)
  },[]);
  
  return (
    <SectionComponent extraClass="core-features" id="core_features">
      <ContainerComponent extraClass="core-features-container">
        <div className="core-features__main_card grid-item-1">
          <h1 className="global-title">Our core features</h1>
          <p className="big-para-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nisi officia ratione placeat error quisquam aliquid? Sunt dolorem
            unde quo assumenda. Voluptatibus minima doloribus.
          </p>
          <button className="global-btn">Try for free</button>
        </div>
        {features_cards.map((item,i)=>{
          return(<CoreFeaturesCard
        img={item.img}
        title={item.title}
        para={item.para}
        extraClass={"grid-item-"+(i+2)}
        key={"grid-item"+(i+1)}
      />)
        })}
        
        
        
      </ContainerComponent>
    </SectionComponent>
  );
}

export default CoreFeaturesSection;
