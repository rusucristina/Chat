import {ChatEngine} from "react-chat-engine";
import ChatFlow from "./components/ChatFlow";
import './App.css';
function App() {
  return (
        <ChatEngine
         height="100%"
         projectID="6c15c53c-665f-4f10-9e23-2ca01e962e80"
         userName="Rusu Cristina"
         userSecret="1234"
         renderChatFeed={(chatAppProps)=> <ChatFlow {...chatAppProps}/>}
        />
  ) 
}

export default App;
