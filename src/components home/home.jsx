import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/main.css';
import { UnionHome } from '../components home/union components.jsx';
import { Buttons } from '../components home/buttons.jsx';
import { Media } from '../components main/media.jsx';

export function Home(){
    return(
        <div className='components'>
            < UnionHome />
            <div class="logo">
                <h1><span>W</span>Commerce</h1>
                <p>Покращення робочої обстановки для працівників та роботодавцям!</p>
                < Buttons />
            </div>
            < Media />
        </div>
    )
}