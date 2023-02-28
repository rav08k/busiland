import React, { useState } from "react";
import upImg from "../../assets/up.png";
import downImg from "../../assets/down.png";
import "./Faq.css"

function FaqCard(props) {
  const [btnActive, setBtnActive] = useState(downImg);

  const faqBtnClickHandler = (event) => {
    let nodeName = event.target.nodeName;
    let ele = event.target;
    let ansEle;

    if (nodeName=="DIV") {
        ansEle = ele.lastChild;
    }else if(nodeName=="BUTTON"){
        ansEle = ele.nextSibling;
    }else if(nodeName=="P"){
        ansEle = ele;
    }

    if (btnActive != "active") {
        setBtnActive("active");
        ansEle.style["height"] = (ansEle.scrollHeight+18) + "px";
        
    } else {
        setBtnActive("");
        ansEle.style["height"] = 0;
    }

  };

  return (
    <div className={"faq_card__wrapper " + btnActive} onClick={faqBtnClickHandler}>
      <button className={"faq_card__question " + btnActive}>
        {props.data.question}
      </button>
      <p className="faq_card__answer">
        {props.data.answer}
      </p>
    </div>
  );
}

export default FaqCard;
