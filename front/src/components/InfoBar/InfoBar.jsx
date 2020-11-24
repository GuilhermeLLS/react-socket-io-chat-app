import React from "react"
import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"
import "./InfoBar.css"

const InfoBar = ({ roomName }) => {
    return (
        <React.Fragment>
            <div className={"infoBar"}>
                <div className={"leftInnerContainer"}>
                    <img className={"onlineIcon"} src={onlineIcon} alt={"onlineImage"} />
                    <h3>{roomName}</h3>
                </div>
            </div>
            <div className="infoBar">
                <div className="rightInnerContainer">
                    <a href="/"><img src={closeIcon} alt={"closeImage"} /></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoBar
