import { useState } from "react"
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmitForm = async (e) => {
        const authObject = { 'Project-ID': '6c15c53c-665f-4f10-9e23-2ca01e962e80', 'User-Name': username, 'User-Secret': password }
        e.preventDefault()
        try {
            await axios.get(`https://api.chatengine.io/chats`, {
                headers: authObject
            })
            localStorage.setItem(`username`, username);
            localStorage.setItem(`password`, password)
            window.location.reload()
            setError("")
        }
        catch (error) {
            setError("Incorrect credential")
        }

    }
    return (
        <div className="background-login-form">
            <div className="login-form">
                <div className="login-title">
                    My Chat
                </div>
                <form onSubmit={handleSubmitForm}>
                    <input
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="username" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="login-input"
                        type="password"
                        placeholder="password" />
                    <div className="login-submit">
                        <button
                            type="submit"
                            className="login-button-submit">
                            let`s go
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}
export default Login