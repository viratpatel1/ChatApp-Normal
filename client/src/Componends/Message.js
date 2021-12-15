import React from 'react';
import ReactEmoji from "react-emoji";
import "../CSS/Message.css";

const Message = ({ message: { user, text }, name }) =>
{
    // console.log("MEssage ", name, text)
    let ByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName)
    {
        ByCurrentUser = true;
    }
    return (
        ByCurrentUser ? (
            <div className='messageContainer justifyEnd'>
                {/* <p className='sentText pr-10'>{trimmedName}</p> */}
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className='messageContainer justifyStart'>
                {/* <p className='sentText'>{trimmedName}</p> */}
                <div className='messageBox backgroundLight'>
                    <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sendText p1-10'>{user}</p>
            </div>
        )
    )
}

export default Message
