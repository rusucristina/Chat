import AllMessages from "./AllMessages";
import MyMessages from "./MyMessage";
import TheirMessages from "./TheirMessage";
const ChatFlow = (props) => {
    const { messages, activeChat, chats, userName } = props
    const chat = chats && chats[activeChat]
    console.log(chat, userName, messages)
    return (
        <div>
            ChatFlow
        </div>
    )
}
export default ChatFlow