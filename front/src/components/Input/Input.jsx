import React from "react"

import "./Input.css"

const Input = ({ message, set: setMessage, sendMessage }) => {
    return (
        <form
            className={"form"}
        >
            <input
                type={"text"}
                value={message}
                className={"input"}
                placeholder={"type a message..."}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
            />
            <button
                className={"sendButton"}
                onClick={(event) => sendMessage(event)}
            >
                Send
            </button>
        </form>
    )

}

export default Input