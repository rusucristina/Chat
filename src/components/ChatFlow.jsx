import AllMessages from "./AllMessages";
import MyMessages from "./MyMessages";
import TheirMessages from "./TheirMessage";
const ChatFlow = ({ messages, activeChat, chats, userName }) => {
    const chat = chats && chats[activeChat]
    console.log(chat, userName, messages)
   
    const generatedMessages = () => {
        const messageKeys = Object.keys(messages)
        console.log(messageKeys)
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
            console.log(messages)
            const MyMessage = userName === message.sender.username
            return (
                <div style={{ width: "100vw" }} key={`mg${index}`}>
                    <div>
                        {
                            MyMessage ?
                                <MyMessages 
                                message= {message}
                                />
                                : <TheirMessages 
                                message= {message}
                                lastMessage={messages?.[lastMessageId]}/>
                        }
                    </div>
                    <div>

                    </div>
                </div>
            )
        })
    }
    generatedMessages()
    if (!chat) return `Loading...`
    return (
        <div>
            <div>
                <div>
                    {chat?.title}
                </div>
                <div>
                    {chat?.people.map((person) => person.person.username)}
                </div>
                {generatedMessages()}
                <div>
                    <AllMessages
                        messages={messages}
                        activeChat={activeChat}
                        chats={chats}
                        userName={userName}
                        idChat={activeChat}
                    />
                </div>
            </div>
        </div>
    )
}
export default ChatFlow