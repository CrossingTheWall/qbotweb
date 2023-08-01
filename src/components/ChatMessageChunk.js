
import { Component, React } from "react";
import "./ChatMessageChunk.css"

class ChatMessageChunk extends Component {
    render() {
        const contentClsName = this.props.alignLeft ? "ChatMessageChunkContent chat-bubble ChatMessageChunkContentAlignLeft" : "ChatMessageChunkContent chat-bubble ChatMessageChunkContentAlignRight";
        return (
            <div className="ChatMessageChunk">
                <div className={this.props.alignLeft ? "ChatMessageChunkInnerDiv ChatMessageChunkInnerAlignLeftDiv" : "ChatMessageChunkInnerDiv ChatMessageChunkInnerAlignRightDiv"}>
                    <div className={contentClsName}>{this.props.content}</div>
                    <div className={this.props.alignLeft ? "ChatMessageChunkTS ChatMessageChunkTSAlignLeft" : "ChatMessageChunkTS ChatMessageChunkTSAlignRight"}>{this.props.timeStamp}</div>
                </div>
            </div>
        )
    }
}

export default ChatMessageChunk;