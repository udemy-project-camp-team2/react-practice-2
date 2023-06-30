import React,{useState, useEffect} from "react";
import io from 'socket.io-client'
const socket = io('http://localhost:3001')


function Chat () {
    const [username,setUsername] = useState('')
    const [message,setMessage] = useState([])
    const [inputValue , setInputValue] = useState('');
    

    useEffect(() => {
        socket.on('message',handleMessage)
        return () => {
            socket.off('message',handleMessage)
        }
    })

    const handleMessage = (message) => {
        setMessage((preMessage) => [...preMessage,message])
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.vale)
    }
    const handleMessageSend = () => {
        if(inputValue.trim() !== '') {
            const currentTime = new Date().toLocaleDateString()
            socket.emit('message',{
                username,
                content : inputValue,
                time : currentTime,
            })
            setInputValue('');
        }
        
    }
    
    return (
        <div>
            <h1>실시간 채팅</h1>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="사용자 이름을 입력해라"/>
            <h3>채팅</h3>
            <div>
                {message.map((message, index) => {
                    <p key={index} style={{color:message.color}}>
                        {message.username} : {message.content} = {message.time}
                    </p>
                })}
            </div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleMessageSend}>전송</button>
        </div>
    )
}

export default Chat;