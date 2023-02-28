import React, { useEffect, useState } from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import PricingCard from "./PricingCard";
import "./Pricing.css"

let data = [
    {
        title:"Lite Plan",
        subTitle:"Mi sit amet maecenas augue",
        perksArr:["3 users in workspace","Workflow automations","Monthly Billing","Collaborative work","10 GB in cloud storage"],
        price:"24",
        type:"mo",
        id:"grid-item1",
        style:{background: "#e2e8f0",
            color: "black"}
    },
    {
        title:"Basic Plan",
        subTitle:"Mi sit amet maecenas augue",
        perksArr:["5 users in workspace","Workflow automations","Weekly Billing","Collaborative work","15 GB in cloud storage"],
        price:"32",
        type:"mo",
        id:"grid-item2",
        style:{}
    },
    {
        title:"Pro Plan",
        subTitle:"Mi sit amet maecenas augue",
        perksArr:["7 users in workspace","Workflow automations","Daily Billing","Collaborative work","20 GB in cloud storage"],
        price:"40",
        type:"mo",
        id:"grid-item3",
        style:{background: "#e2e8f0",
            color: "black"}
    }
];

function PricingSection() {
    const [pricingCardData,setData]=useState([]);

    useEffect(() => {
      setData(data);
    }, []);
    
    const filterChangeHandler =(event)=>{
        let priceObj = {mo:[24,32,40],year:[240,320,400]};
        setCardGridClass("active");
        
        setTimeout(()=>{
            setData(prevData=>{
            console.log(event.target.id);
            let newData = prevData.map((item,i)=>{
                item.type = event.target.id;
                item.price = priceObj[item.type][i];
                return(item);
            })
            console.log("callback");
            return(newData);
        })
            },110);

        setTimeout(() => {
                setCardGridClass("");
        }, 150);
        
        if(event.target.id == "mo"){
            setMonthStyle(activeStyle);
            setYearStyle(deactiveStyle);
        }else{
            setMonthStyle(deactiveStyle);
            setYearStyle(activeStyle);
        }
    }

    const activeStyle = {borderBottom:"solid 2px #6b46c1",color:"#6b46c1"};
    const deactiveStyle = {borderBottom:"solid 2px #d3d3d3",color:"grey"};

let [monthStyle,setMonthStyle]=useState(activeStyle);
let [yearStyle,setYearStyle]=useState(deactiveStyle);
let [cardGridClass,setCardGridClass]=useState("");

  return (
    <SectionComponent extraClass="pricing" id="pricing">
      <ContainerComponent extraClass="pricing_container">
        <h1 className="global-title">Pricing</h1>
        <p className="big-para-text">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
        <div className="pricing__card_container">
          <div className="pricing__filter_wrapper">
            <span className="pricing__card_filter" id="mo" onClick={filterChangeHandler} style={monthStyle}>Monthly</span>
            <span className="pricing__card_filter" id="year" onClick={filterChangeHandler} style={yearStyle}>Yearly</span>
          </div>
            <div className={"pricing__card_grid "+cardGridClass}>
                {pricingCardData.map(item=>{
                    return(<PricingCard extraClass={item.id} key={item.id} data={item} />)
                })}
            </div>
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default PricingSection;
