import React, { useEffect, useState } from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import TeamImgCard from "./TeamImgCard";
import "./TeamsSection.css";
import teamImg1 from "../../assets/img2.jpg"
import teamImg2 from "../../assets/img1.jpg"
import teamImg3 from "../../assets/img4.jpg"
import teamImg4 from "../../assets/img7.jpg"


let data = [
  {img:teamImg1,name:"Jayant Sharma",designation:"Founder"},
  {img:teamImg2,name:"Deepak Roy",designation:"Design Team Lead"},
  {img:teamImg3,name:"Parul Tiwari",designation:"Marketing Lead"},
  {img:teamImg4,name:"Swati Shukla",designation:"Front End Team Lead"}
]

function TeamsSection() {
  const [cardArr,setCardArr]=useState([]);
  useEffect(()=>{
    setCardArr(data);
  },[])
  return (
    <SectionComponent extraClass="team_section" id="team">
      <ContainerComponent extraClass="team__section__container">
        <div className="team_title_card">
          <h1 className="global-title">Team</h1>
          <p className="big-para-text">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.
          </p>
        </div>
        <div className="team_img_grid">
          {cardArr.map((ele,i)=>{
            return(
              <TeamImgCard data={ele} extraClass={"grid-item"+(i+1)} key={"grid-item"+(i+1)}/>
            )
          })}
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default TeamsSection;
