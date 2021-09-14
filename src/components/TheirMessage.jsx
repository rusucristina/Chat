const TheirMessages = ({ lastMessage, message }) => {
    const firstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div>
            {/* if is first message from the user */}
            {firstMessage && (
                <div style={{ backgroundColor: `url(${message?.sender?.avatar})` }}>
                </div>
            )}
            {/*if we have an attachments or text*/
                message?.attachments?.length > 0
                    ? (<img src={message.attachments[0].file} alt="attachment of the message" />)
                    : (
                        <div>
                            {message.text}
                        </div>
                    )
            }

        </div>
    )
}
export default TheirMessages;