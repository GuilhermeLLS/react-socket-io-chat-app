import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Join.css"

const Join = ({ redirect }) => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    const handleRedirect = (event) => {
        // event.preventDefault()
        redirect(name, room)
    }

    return (
        <div className={"joinOuterContainer"}>
            <div className={"joinInnerContainer"}>
                <h1 className={"heading"}>Join</h1>
                <div>
                    <input
                        placeholder={""}
                        className={"joinInput"}
                        type={"text"}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input
                        placeholder={""}
                        className={"joinInput mt-20"}
                        type={"text"}
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link
                    onClick={(event) => handleRedirect(event)}
                    to={`/chat`}>
                    <button
                        className={"button mt-20 "}
                        type={"submit"}>
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Join
