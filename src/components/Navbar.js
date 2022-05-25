import react,{useState} from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';

import './Navbar.css';
const Navbar = ()=>{
    return(
        <div className='navbar'>
            <div className='contaainer'>
                <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
            </div>
        </div>
    );
}

export default Navbar;