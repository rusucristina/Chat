import {ChatEngine} from "react-chat-engine";
import ChatFlow from "./components/ChatFlow"; 
import Login from "./components/Login"
import './App.css';
function App() {
  if(!localStorage.getItem("username")) return <Login/>
  return (
        <ChatEngine
         height="100vh"
         projectID="6c15c53c-665f-4f10-9e23-2ca01e962e80"
         userName={localStorage.getItem("username")}
         userSecret={localStorage.getItem("password")}
         renderChatFeed={(chatAppProps)=> <ChatFlow {...chatAppProps}/>}
         onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
  ) 
}

export default App;
