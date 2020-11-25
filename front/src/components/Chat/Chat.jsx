import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"
import Messages from "../Messages/Messages"

import "./Chat.css"

let socket;

const Chat = ({ nameJoin, roomJoin }) => {
    console.log(nameJoin, roomJoin);
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])
    const ENDPOINT = "localhost:5000"

    useEffect(() => {
        socket = io(ENDPOINT)

        setName(nameJoin)
        setRoom(roomJoin)

        socket.emit("join", { name: nameJoin, room: roomJoin }, (error) => {
            if (error) {
                alert(JSON.stringify(error))
            }
        })
        return () => {
            socket.emit("disconnect")
            socket.off()
        }

    }, [ENDPOINT, nameJoin, roomJoin])


    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message])
        })
    }, [messages])


    const sendMessage = (event) => {
        event.preventDefault()
        if (message) {
            socket.emit("sendMessage", message, () => {
                setMessage("")
            })
        }
    }
    return (
        <div className={"outerContainer"}>
            <div className={"container"}>
                <InfoBar roomName={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} set={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat