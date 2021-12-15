import React from 'react';
import "../CSS/Information.css";
import Online from "../image/green.png"
import Close from "../image/close.png"

const Information = ({ room, name }) =>
{
    // console.log("info ", room)
    return (
        <div className='nav'>
            <div className='InfoBar'>
                <div className='LeftInnerContainer'>
                    <img className='onlineIcon' src={Online} alt='Online' />
                    <h3>{room} Room</h3>
                </div>
                <div className='rightInnerContainer'><p>{name}</p>
                    <a href='/'><img src={Close} alt='Close' /></a>
                </div>
            </div>
        </div>
    )
}

export default Information
