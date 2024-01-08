import React from 'react';
import '../css/main.css';
import { IoIosClose } from "react-icons/io";

export function Contacts({ contactsClick }) {
  return (
    <div className='container'>
      <button onClick={contactsClick}>
        <IoIosClose fontSize='32px' />
      </button>
      <div className='box-content'>
        <h1>Контакти</h1>
        <p>
          Ви можете з нами зв'язатися:
          <br />+000000000000
          <br />+380000000000
          <br />wcommerce@gmail.com
          <br />Та через соціальні мережі.
        </p>
      </div>
    </div>
  );
}