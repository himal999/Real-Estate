import react from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import './Hero.css';
const Hero = ()=>{
    return(
        <div className='hero'>
            <div className='content'>
                <h1>Find the Amazing Places</h1>
                <p className='search-text'>Search the largest selection of luxury high-rise apartments,multi-family homes and luxury homes</p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Enter keyword...'/>
                    </div>
                    <div className='radio'>
                        <input type='radio' checked/>
                        <lable>Buy</lable>
                        <input type='radio' />
                        <lable>Rent</lable>
                        <button type="submit"><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;