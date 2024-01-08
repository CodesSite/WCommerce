import React from 'react';
import '../css/main.css';
import { IoIosClose } from "react-icons/io";

export function Money({ moneyClick }) {
  return (
    <div className='container'>
      <button onClick={moneyClick}>
        <IoIosClose fontSize='32px' />
      </button>
      <div className='box-content'>
        <h1>Заробіток</h1>
        <p>
          Завдяки продукту не тільки можуть заробити кошти бізнеси, а звичайні користувачі також. Ви можете 
          створити публічно завдання, а другий користувач зможе виконати його, но тільки за винагороду, яку
          видасть творець завдання. 
        </p>
      </div>
    </div>
  );
}