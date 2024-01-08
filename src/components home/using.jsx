import React from 'react';
import '../css/main.css';
import { IoIosClose } from "react-icons/io";

export function Using({ usingClick }) {
  return (
    <div className='container'>
      <button onClick={usingClick}>
        <IoIosClose fontSize='32px' />
      </button>
      <div className='box-content'>
        <h1>Його використання</h1>
        <p>
          Ви можете його використовувати в різних аспектах. Надання робочого завдання працівникам, створення
          публічних завдань, виконання завдань. Ви також можете використовувати продукт як ви забажаєте, лише
          не порушуючи правила.
        </p>
      </div>
    </div>
  );
}