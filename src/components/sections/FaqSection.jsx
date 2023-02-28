import React, { useEffect, useState } from "react";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import FaqCard from "./FaqCard";
import "./Faq.css";

let faqCardData = [
  {
    question: "How much costs your services?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat..",
    id: "faq-item-1",
  },
  {
    question: "How will you help me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
    id: "faq-item-2",
  },
  {
    question: "What is your workflow?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius . Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    id: "faq-item-3",
  },
  {
    question: "Which services do you provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    id: "faq-item-4",
  },
  {
    question: "How can I build my brand without a lot of money?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    id: "faq-item-5",
  },
  {
    question: "Which services do you provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    id: "faq-item-6",
  },
  {
    question: "How can I build my brand without a lot of money?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    id: "faq-item-7",
  },
  {
    question: "What should I do after applying form?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    id: "faq-item-8",
  },
  {
    question: "How much costs your services?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros . Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    id: "faq-item-9",
  },
  {
    question: "How will you help me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    id: "faq-item-10",
  },
];

function FaqSection() {
  let [faqData, setFaqData] = useState([]);

  useEffect(() => {
    setFaqData(faqCardData);
  }, []);

  return (
    <SectionComponent extraClass="" id="faqs">
      <ContainerComponent extraClass="faq_container">
        <h1 className="global-title">Frequently Asked Questions</h1>
        <div className="faq__card_container">
          <div className="faq__card_wrapper_left">
            {faqData.map((faq, i) => {
                if (i < (faqData.length/2)) {
                    return <FaqCard data={faq} key={faq.id} extraClass={""} />;
                }
            })}
          </div>
          <div className="faq__card_wrapper_right">
            {faqData.map((faq, i) => {
               if (i >= (faqData.length/2)) {
                return <FaqCard data={faq} key={faq.id} extraClass={""} />;
            }
            })}
          </div>
        </div>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default FaqSection;
