// import React from 'react';
import React, { useState } from 'react';

const Read = () => {
  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        <div className="accordion-item" onClick={()=>setIsActive(!isActive)}>
          <div className="accordion-title">
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}+</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Read;