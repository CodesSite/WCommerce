import React from 'react';
import '../css/main.css';
import { IoIosClose } from "react-icons/io";

export function About({ aboutClick }) {
  return (
    <div className='container'>
      <button onClick={aboutClick}>
        <IoIosClose fontSize='32px' />
      </button>
      <div className='box-content'>
        <h1>Про <span>W</span>Commerce</h1>
        <p>
          Даний продукт займається забезпеченням ефективною
          роботою для працівників, комунікацією між ними та розробкою власного
          бізнеса, адже ми розраховуємо на зменшення часу для працівників під
          час роботи.
        </p>
      </div>
    </div>
  );
}