const TheirMessages = ({ lastMessage, message }) => {
    const firstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className="msg-row">
            {/* if is first message from the user */}
            {firstMessage && (
                <div className="avatar"
                style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {/*if we have an attachments or text*/
                 message.attachments && message.attachments.length > 0
                    ? (<img
                        className="img-message"
                        src={message.attachments[0].file}
                        alt="attachment of the message" 
                        style={{ marginLeft: firstMessage ? '4px' : '48px' }}
                        />)
                    : (
                        <div className="msg" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft:firstMessage ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )}
        </div>
    )
}
export default TheirMessages;