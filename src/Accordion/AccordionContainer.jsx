import { useState } from "react";
import Navbar from "../components/Navbar";
import Accordion from "./Accordion";
const AccordionContainer = () => {
  const accordionData = [
    {
      title: "Do I have to allow the use of cookies?",
      content:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      title: "How do I change my My Page password?",
      content:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      title: "What is BankID?",
      content:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      title: "Whose birth number can I use?",
      content:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      title: "When do I recieve a password ordered by letter??",
      content:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false)
const handleChange=(e)=> {
  setIsChecked(e.target.checked);

  
  // do whatever you want with isChecked value
}

  return (
    <>
      <Navbar text={"Accordion"} />
      <div className="w-[90%] mx-auto">
        <h4 className="text-center font-semibold m-6 flex justify-center gap-2">
          <label htmlFor="accordionMultiple">
            Is multiple open accordion allowed?
          </label>
          <input type="checkbox" id="accordionMultiple" onChange={(e)=>handleChange(e)}/>
        </h4>
        {accordionData.map((accordion, index) => (
          <Accordion
            title={accordion.title}
            content={accordion.content}
            isActive={isChecked?true:(activeIndex === index)}
            onShow={() => setActiveIndex(index) }
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default AccordionContainer;
