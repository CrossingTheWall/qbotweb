
import { Component, React } from "react";
import "./ChatTextView.css"
import ChatMessageChunk from "./ChatMessageChunk";

class ChatTextView extends Component {

    render() {
        return (
            <div className="ChatTextView">
                <div className="ChatTextViewInnerDiv">
                    {
                        this.props.msgChunks.map((chunk, index) => (
                            <ChatMessageChunk alignLeft={chunk.alignLeft} content={chunk.content} timeStamp={chunk.timeStamp} key={index}></ChatMessageChunk>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ChatTextView;