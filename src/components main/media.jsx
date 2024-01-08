import React from 'react';
import '../css/main.css';
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

export function Media(){
    return(
        <ul className='media'>
            <li><a><CiInstagram /></a></li>
            <li><a><PiTelegramLogoLight /></a></li>
            <li><a><RiTwitterXLine /></a></li>
        </ul>
    )
}