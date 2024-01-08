import React from 'react';
import '../css/main.css';
import {useState} from 'react';
import { About } from '../components home/about.jsx';
import { Using } from '../components home/using.jsx';
import { Whom } from '../components home/whom.jsx';
import { Money } from '../components home/money.jsx';
import { Contacts } from '../components home/contact.jsx';

export function UnionHome(){
    const [isBlockAbout, setBlockAbout] = useState(false);
    const [isBlockUsing, setBlockUsing] = useState(false);
    const [isBlockWhom, setBlockWhom] = useState(false);
    const [isBlockMoney, setBlockMoney] = useState(false);
    const [isBlockContacts, setBlockContacts] = useState(false);

  const aboutClick = () => {
    setBlockAbout(!isBlockAbout);
  };
  
  const usingClick = () => {
    setBlockUsing(!isBlockUsing);
  };
  
  const whomClick = () => {
    setBlockWhom(!isBlockWhom);
  };
  
  const moneyClick = () => {
    setBlockMoney(!isBlockMoney);
  };

  const contactsClick = () => {
    setBlockContacts(!isBlockContacts);
  };

  return(
    <nav>
      <ul>
        <button onClick={aboutClick}>Про WCommerce</button>       
        <button onClick={usingClick}>Його використання</button>
        <button onClick={whomClick}>Кому підходить?</button>
        <button onClick={moneyClick}>Заробіток</button>
        <button onClick={contactsClick}>Контакти</button>
      </ul>
      {isBlockAbout && <About aboutClick={aboutClick} />}
      {isBlockUsing && <Using usingClick={usingClick} />}
      {isBlockWhom && <Whom whomClick={whomClick} />}
      {isBlockMoney && <Money moneyClick={moneyClick} />}
      {isBlockContacts && <Contacts contactsClick={contactsClick} />}
    </nav>
  )
}