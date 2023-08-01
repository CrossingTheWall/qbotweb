
import { Component, React } from "react";
import "./ChatContainer.css"
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatTextView from "./ChatTextView";

class ChatContainer extends Component {

    clickSendButton(text, self) {
        // click button
        const newMessage = {alignLeft: false, content:text, timeStamp: "Today 10:00 AM"};
        const updatedMsgChunks = [...self.state.msgChunks, newMessage];
        self.setState({msgChunks: updatedMsgChunks});
        setTimeout(() => {
            self.autoAppendResponse(self)
        }, 300);
    }

    autoAppendResponse(self) {
        const newMessage = {alignLeft: true, content:"这是自动回复消息！", timeStamp: "Today 10:00 AM"};
        const updatedMsgChunks = [...self.state.msgChunks, newMessage];
        self.setState({msgChunks: updatedMsgChunks});
    }

    constructor(props) {
        super(props)
        this.state = {msgChunks: [
            {alignLeft: true, content: "Hi Alex, What's Up?", timeStamp: "Yesterday 14:26 PM"},
            {alignLeft: false, content: 'Oh, hello! All perfectly. I work, study and know this wonderful world!', timeStamp: "Yesterday 14:29 PM"}
        ]}
    }

    render() {
        return (
            <div className="ChatConatiner">
                <div className="ChatHeaderOutDiv">
                    <ChatHeader></ChatHeader>
                </div>
                <div className="ChatTextViewOuterDiv">
                    <ChatTextView msgChunks={this.state.msgChunks}></ChatTextView>
                </div>
                <div className="ChatInputOutDiv">
                    <ChatInput sendButtonClick={(text)=> this.clickSendButton(text, this)}></ChatInput>
                </div>

            </div>
        )
    }
}

export default ChatContainer;