import { useState } from "react";
import axios from "axios";

const projectID = "83ca7ea5-aab9-4903-84cf-15466b1199b9";

const Modal = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let hexString = "0123456789abcdef";

    let randomColor = () => {
        let hexCode = "#";
        for (let i = 0; i < 6; i++) {
            hexCode += hexString[Math.floor(Math.random() * hexString.length)];
        }
        return hexCode;
    };
    console.log(randomColor());
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID": projectID,
            "User-Name": username,
            "User-Secret": password,
        };

        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject,
            });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
            setError("");
        } catch (err) {
            setError("Oops, incorrect credentials!");
        }
    };

    return (
        <div
            className="wrapper"
            style={{
                backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}) `,
            }}
        >
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default Modal;
