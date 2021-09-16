import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine"
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
const AllMessages = (props) => {
    const { chatId, creds } = props
    const [messageContent, setMessageContent] = useState("")
    // console.log(chatId)
    // console.log(messageContent)
    // console.log("creds2")
    // console.log(creds)
    const handleSubmit = (e) => {
        e.preventDefault()
        // const messageText = messageContent.trim()
        if (messageContent.length > 0) {
            sendMessage(creds, chatId, {messageContent})
        }
        setMessageContent(messageContent)
    }
    const handleMessageContent = (e) => {
        setMessageContent(e.target.value)
        isTyping(creds, chatId)
    }
    // console.log("messageContent")
    // console.log(messageContent)
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
            <input
                className="input-file"
                type="file"
                multiple={false}
                onChange={uploadImage}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-button"/>
                </span>
            </label>

            <button
                type="submit" className="send-message">
                <SendOutlined />
            </button>
        </form>
    )
}
export default AllMessages;