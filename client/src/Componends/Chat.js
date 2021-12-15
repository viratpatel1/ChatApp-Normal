import React, { useState, useEffect } from 'react';
import queryString from "query-string";
import io from "socket.io-client";
import "../CSS/Chat.css";
import Information from './Information';
import Input from './Input';
import Messages from './Messages';

let socket;

const Chat = ({ location }) =>
{
    const [names, setNames] = useState();
    const [rooms, setRooms] = useState();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const scrollRef = useRef();
    const url = "localhost:5000";

    useEffect(() =>
    {
        const getUser = async () =>
        {
            try
            {
                // console.log(queryString.parse(location.search))
                const { name, room } = queryString.parse(location.search);
                socket = io(url);
                setNames(name)
                setRooms(room)
                // console.log(name, room)
                // console.log("srm ", name, room)
                socket.emit('join', { name, room }, () =>
                {
                    // console.log("name ", name, room);
                });

            } catch (error)
            {
                console.log(error)
            }
        }
        getUser();

        // return () =>
        // {
        //     socket.emit("disconnect");
        //     socket.off();
        // }
    }, [url, location.search]);

    useEffect(() =>
    {
        try
        {
            socket.on('message', (message) =>
            {
                setMessages([...messages, message]);
            });
        } catch (error)
        {
            console.log(error)
        }

    }, [messages]);

    const sendMessage = (event) =>
    {
        event.preventDefault();

        if (message)
        {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log("msg ", messages, message);
    return (
        <div>
            <div className='outerContainer'>
                <div className='container'>
                    <Information name={names} room={rooms} />
                    <div className='msg' >
                        <Messages messages={messages} name={names} />
                    </div>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Chat
