const TheirMessages = ({ lastMessage, message }) => {
    const firstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username
console.log(message)
    return (
        <div className="msg-row">
            {/* if is first message from the user */}
            {firstMessage && (
                <div classname="avatar"
                style={{ backgroundColor: `url(${message?.sender?.avatar})` }}>
                </div>
            )}
            {/*if we have an attachments or text*/
                message?.attachments?.length > 0
                    ? (<img 
                        className="img-message"
                        src={message.attachments[0].file} 
                        alt="attachment of the message" />)
                    : (
                        <div className="msg">
                            {message.text}
                        </div>
                    )
            }

        </div>
    )
}
export default TheirMessages;