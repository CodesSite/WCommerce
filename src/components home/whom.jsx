import React from 'react';
import '../css/main.css';
import { IoIosClose } from "react-icons/io";

export function Whom({ whomClick }) {
  return (
    <div className='container'>
      <button onClick={whomClick}>
        <IoIosClose fontSize='32px' />
      </button>
      <div className='box-content'>
        <h1>Кому підходить?</h1>
        <p>
          Бізнесам, працівникам, простим користувачам інтернету. Будь-яка особа може користуватися нашим продуктом
          та використовувати в різних комерційних та не комерційних цілей. Ми готові, забезпечувати любого користвувача.
        </p>
      </div>
    </div>
  );
}