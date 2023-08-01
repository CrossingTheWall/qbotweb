
import { Component, React } from "react";
import "./ChatHeader.css"
import Avatar from "../assets/Avatar.png"

class ChatHeader extends Component {
    render() {
        return (
            <div className="ChatHeader">
                <div className="ChatHeaderAvatarDiv">
                    <img src={Avatar} alt="avatar"></img>
                </div>
                <div className="ChatHeaderRightDiv">
                    <div className="ChatHeaderTitle">
                        QBot
                    </div>
                    <div className="ChatHeaderBrief">
                        The Ultimated Player
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatHeader;