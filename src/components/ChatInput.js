
import { Component, React, createRef } from "react";
import "./ChatInput.css"
import SendButton from "../assets/SendButton.png"

class ChatInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef();
    }

    sendButtonClick = (text) => {
        this.props.sendButtonClick(text)
    }

    _onSendButtonClick(self) {
        if (self !== undefined && self != null) {
            if (self.inputRef != null && self.inputRef.current != null && self.inputRef.current.value != null) {
                self.sendButtonClick(self.inputRef.current.value)
            }
        }
    }

    render() {
        return (
            <div className="ChatInput">
                <div className="ChatInputInnerDiv">
                    <div className="ChatInputTextFieldDiv">
                        <input ref={this.inputRef} type="text" placeholder="请输入指令"></input>
                    </div>
                    <div className="ChatInputSendButton" onClick={()=> this._onSendButtonClick(this)}>
                        <img src={SendButton} alt=""></img>
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatInput;