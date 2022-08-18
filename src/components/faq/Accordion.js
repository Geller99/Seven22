import React, { useState } from 'react'


// NOTE :  Accordion component is not used anywhere in the project.

const Accordion = ({ question, answer, Link, index }) => {

  // const [show, SetShow] = useState(false);
  const [selected, SetSelected] = useState(null);

  const toggle = (i) => {
    console.log(i);
    // if (i === selected) {
    //   SetSelected(null);
    // }
    // else {
    //   SetShow(true);
    //   SetSelected(i);
    // }

    if (selected === i) {
      return SetSelected(null);
    }

    SetSelected(i);

  }

  // console.log(index);

  return (
    <div>
      <div className={selected === index ? "Accordion-main-heading bg-fill" : "Accordion-main-heading bg-transparent"}  >
        <h3 className="question-wrapper " onClick={() => toggle(index)} >{question}</h3>
        <p style={{
          cursor: 'pointer',
        }} onClick={() => toggle(index)}>{selected === index ? <img src="/assets/svg/remove-icon.png" alt="remove-icon" /> : <img src="/assets/svg/add-icon.png" alt="add-icon" />}</p>
      </div>
      {
        selected === index ? <p className="answers-wrapper" ><>
          {answer}
        </> </p> : null

      }

    </div>
  )
}

export default Accordion;

// {show && <p className="answers-wrapper" ><>
//         {answer}
//         {Link && <a target="_blank" rel="noopener noreferrer" href={Link}>{Link}</a>}
//       </> </p>}