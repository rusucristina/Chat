import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine"
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
const AllMessages = (props) => {
    const { chatId, creds } = props
    const [messageContent, setMessageContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = messageContent.trim()
        if (messageContent.length > 0) {
            sendMessage(creds, chatId, {text})
        }
        setMessageContent("")
    }

    const handleMessageContent = (e) => {
        setMessageContent(e.target.value)
        isTyping(props, chatId)
    }
   
    const uploadImage = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text: "" })
    }
    return (
        <form className="messages-form" onSubmit={handleSubmit}>
            <input
                onChange={handleMessageContent}
                onSubmit={handleSubmit}
                value={messageContent}
                className="messages-input"
                type="text"
                placeholder="Send the message"
            /> 
             <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-button"/>
                </span>
            </label>
            <input
                className="input-file"
                id="upload-button"
                type="file"
                multiple={false}
                onChange={uploadImage.bind(this)}
                style={{display:"none"}}
            />
            <button
                type="submit" className="send-message">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
}
export default AllMessages;