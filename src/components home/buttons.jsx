import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/main.css';
import { Routes, Route, Link } from 'react-router-dom';

export function Buttons(){
    return(
        <>
            <div className='buttons'>
                <Link to="/reglog">Реєстрація/Вхід</Link>
                <Link to="/download">Завантажити програму</Link>
            </div>
        </>

    )
}