import AllMessages from "./AllMessages";
import MyMessages from "./MyMessages";
import TheirMessages from "./TheirMessage";
import starsImg from "./images/stars.png"
const ChatFlow = ({ messages, activeChat, chats, userName, creds }) => {
    const chat = chats && chats[activeChat]
    //If the message is read
    const readMessages = (message, myMessage) => {
        chat?.people?.map((person, index) =>
            person.last_read === message.id && (
                <div
                    key={`read_${index}`}
                    className="read-receipt"
                    style={{
                        float: myMessage ? "right" : "left",
                        backgroundImage: person?.person?.avatar && `url(${person?.person?.avatar})`
                    }} />
            ))
    }
    //Handle messages to components
    const generatedMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageId = index === 0 ? null : keys[index - 1];
            const myMessage = userName === message.sender.username

            return (
                <div style={{ width: "100%" }} key={`mg_${index}`}>
                    <div className="message-block">
                        {myMessage ?
                            <MyMessages
                                message={message}
                            />
                            : <TheirMessages
                                message={message}
                                lastMessage={messages[lastMessageId]} />
                        }
                    </div>
                    {/* If the message is already read */}
                    <div className="read-messages" style={{ marginRight: myMessage ? '18px' : '0px', marginLeft: myMessage ? "0px" : "68px" }}>
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
                    {chat?.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            <img src={starsImg} alt="stars" id="stars" />
            {generatedMessages()}

            <div style={{ height: "100px" }} />
            <div className="all-message-container">
                <AllMessages
                    messages={messages}
                    chats={chats}
                    userName={userName}
                    chatId={activeChat}
                    creds={creds}
                />
            </div>
        </div>

    )
}
export default ChatFlow