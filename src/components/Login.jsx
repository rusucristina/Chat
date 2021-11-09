import { useState } from "react"
import { useSpring, animated } from "react-spring";
import axios from 'axios'
import "./Login.css"
import starsImg from "./images/stars.png"
import moonImg from "./images/moon.png"
import mountainsBehind from "./images/mountains_behind.png"
import mountainsFront from "./images/mountains_front.png"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [scrollKey, setScrollKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 8000 },
        reset: true,
        reverse: scrollKey % 2 === 0,
        onRest: () => {
            setScrollKey(scrollKey + 1);
        }
    });
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const authObject = { 'Project-ID': '6c15c53c-665f-4f10-9e23-2ca01e962e80', 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get(`https://api.chatengine.io/chats`, {
                headers: authObject
            })
            localStorage.setItem(`username`, username);
            localStorage.setItem(`password`, password)
            window.location.reload()
            setError("")
        }
        catch (err) {
            console.log(error)
            setError("Incorrect credentials")
        }
    }
    return (

        <>
            {/* Parallax Scrolling*/}
            <div className="background-login-form">
                <section>
                    <img src={starsImg} alt="stars" id="stars" />
                    <img src={moonImg} alt="moon" id="moon" />
                    <img src={mountainsBehind} alt="mountains" id="mountains_behind" />
                    <form className="login-form" onSubmit={handleSubmitForm}>
                    <input
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="username" 
                        required/>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="login-input"
                        type="password"
                        placeholder="password" 
                        required/>
                    <div align="center">
                        <button
                            type="submit"
                            className="login-button-submit"
                            >
                           Submit
                        </button>
                    </div>
                </form>
                <div className="error">{error}</div>
                    <div key={scrollKey} id="text">
                        <animated.div style={scrolling} >Moon Chat</animated.div>
                    </div>
                    <img src={mountainsFront} alt="mountains" id="mountains_front" />
                </section>
            </div>
        </>

    )
}
export default Login