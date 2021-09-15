import AllMessages from "./AllMessages";
import MyMessages from "./MyMessages";
import TheirMessages from "./TheirMessage";
const ChatFlow = ({ messages, activeChat, chats, userName, creds }) => {
    const chat = chats && chats[activeChat]
    // console.log("chat")
    // console.log(chat)
    // console.log("creds")
    // console.log(creds)

    //If the message is read
    const readMessages = (message, myMessage) => {
        chat?.people?.map((person, index) =>
            person.last_read === message.id && (
                <div
                    key={`read_${index}`}>
                    style={{
                        float: myMessage ? "right" : "left",
                        backgroundImage: `url(${person?.person?.avatar})`
                    }}
                </div>
            ))
    }
    //Handle messages to components
    const generatedMessages = () => {
        const messageKeys = Object.keys(messages)
        return messageKeys.map((key, index) => {
            const message = messages[key]
            const lastMessageId = () => {
                if (index === 0) {
                    return null
                }
                else {
                    return messageKeys[index - 1]
                }
            }
            const myMessage = userName === message.sender.username
            return (
                <div key={`msg_${index}`} style={{ width: "100vw" }} key={`mg${index}`}>
                    <div>
                        {
                            myMessage ?
                                <MyMessages
                                    message={message}
                                />
                                : <TheirMessages
                                    message={message}
                                    lastMessage={messages?.[lastMessageId]} />
                        }
                    </div>
                    {/* If the message is already read */}
                    <div className="read-messages" style={{ marginRight: myMessage ? "15px" : "0px", marginLeft: myMessage ? "0px" : "60px" }}>
                        {readMessages(message, myMessage)}
                    </div>
                </div>
            )
        })

    }

    if (!chat) return `Loading...`
    return (
        <div className="chat">
            <div className="chat-container">
                <div className="chat-container-title">
                    <div className="chat-title">
                        {chat?.title}
                    </div>
                </div>
                <div className="chat-subtitle">
                    {chat?.people.map((person) => person.person.username)}
                </div>
                {generatedMessages()}
                <div style={{ height: "100px" }}></div>
                <div className="all-message-container">
                    <AllMessages
                        messages={messages}
                        activeChat={activeChat}
                        chats={chats}
                        userName={userName}
                        chatId={activeChat}
                        creds={creds}
                    />
                </div>
            </div>
        </div>
    )
}
export default ChatFlow