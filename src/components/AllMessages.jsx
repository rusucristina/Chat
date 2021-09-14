import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine"
const AllMessages = (props) => {
    const { chatId, creds } = props
    const [messageContent, setMessageContent] = useState("")
    console.log(messageContent)
    const handleSubmit = (e) => {
        e.preventDefault()
        const messageText = messageContent.trim()
        if (messageText.length > 0) {
            sendMessage(chatId, creds, { messageText })
        }
        setMessageContent("")
    }
    const handleMessageContent = (e) => {
        setMessageContent(e.target.value)
        isTyping(props, chatId)
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

                </span>
            </label>
        </form>
    )
}
export default AllMessages;