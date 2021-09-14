import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine"
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
const authObject = {'Project-ID': '6c15c53c-665f-4f10-9e23-2ca01e962e80', 'User-Name': 'Rusu Cristina', 'User-Secret': '1234'}
const AllMessages = (props) => {
    const { chatId, creds } = props
    const [messageContent, setMessageContent] = useState("")
    console.log(chatId)
    console.log(messageContent)
    console.log("creds")
    console.log(creds)
    const handleSubmit = (e) => {
        e.preventDefault()
        const messageText = messageContent.trim()
        if (messageText.length > 0) {
            sendMessage(authObject, chatId, { messageText })
        }
        setMessageContent("")
    }
    const handleMessageContent = (e) => {
        setMessageContent(e.target.value)
        isTyping(authObject, chatId)
    }
    const uploadImage = (e) => {
        sendMessage(authObject, chatId, {  text: "hello" })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleMessageContent}
                onSubmit={handleSubmit}
                type="text"
                placeholder="Send the message"
                value={messageContent} />
            <label htmlFor="upload-button">
                <span>
                    <PictureOutlined />
                </span>
            </label>
            <input
                type="file"
                // multiple={false}
                onChange={uploadImage}
            />
            <button
                type="submit" >
                <SendOutlined />
            </button>
        </form>
    )
}
export default AllMessages;