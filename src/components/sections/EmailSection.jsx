import React from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import "./Email.css"

function EmailSection() {
  return (
    <SectionComponent>
      <ContainerComponent extraClass="email_container">
        <h1 className="global-title">Let’s save your money today</h1>
        <p className="big-para-text">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
        <div className="email__email-btn">
          <input
            type="email"
            name=""
            id=""
            className="global-input"
            placeholder="Your email"
          />
          <button className="global-btn">Subscribe</button>
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default EmailSection;
