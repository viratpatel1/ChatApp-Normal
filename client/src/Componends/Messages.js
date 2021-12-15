import React, { useEffect, useRef } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
import "../CSS/Messages.css";
import Message from './Message';

const Messages = ({ messages, name }) =>
{
    const scrollRef = useRef();
    useEffect(() =>
    {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])
    return (
        <div>
            {/* <ScrollToBottom className='messages'> */}
            <div className='messages' >
                {messages.map((message, i) =>
                    <div ref={scrollRef} key={i}><Message message={message} name={name} /></div>
                )}
            </div>
            {/* </ScrollToBottom> */}
        </div>
    )
}

export default Messages
