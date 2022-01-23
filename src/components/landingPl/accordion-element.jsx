import React from 'react';
import parse from 'html-react-parser'

const AccordionElement = ({ element }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        {element.question}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{parse(element.text)}</div>
      </div>
    </div>
  );
};

export default AccordionElement;