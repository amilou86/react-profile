import React from 'react';
import './floating-nav.css';
import Scrollspy from "react-ui-scrollspy";
import Nav from './Nav';
import { AiFillHome } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { AiFillAppstore } from 'react-icons/ai'
import { AiFillMessage } from 'react-icons/ai'


const FloatingNav = () => {
    const data = [{ id: 1, link: '#', icon: <AiFillHome /> },
    { id: 2, link: '#about', icon: <BsPersonFill /> },
    { id: 3, link: '#portfolio', icon: <AiFillAppstore /> },
    { id: 4, link: '#contact', icon: <AiFillMessage /> }
    ]
    return (
        <Scrollspy offset={-350} className='scrollspy' items={['header', 'about', 'portfolio', 'contact']} currentClassName="active">
            <ul id="floating-nav">
                {data.map(item => <Nav key={item.id} item={item} />)}
            </ul>
        </Scrollspy>
    );
};

export default FloatingNav;