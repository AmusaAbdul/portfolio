import { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";


function Header() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);



    return (
            <header className="container header">
                <img className="profile-pic" src="/assets/HeaderPicture.jpeg" alt="My Picture" />
                <div className="header-info">
                    <h1>Amusa Abdullah</h1>
                <h4>
                    <Typewriter
                        options={{
                            strings: [
                                "Frontend Developer",
                                "Web Enthusiast"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h4>
                    <p>Building user-focused  web apps that are fast and responsive</p>
                    <nav style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                        <a className="navlist" href="#about">About</a>
                        <a className="navlist" href="#projects">Projects</a>
                        <a className="navlist" href="#contact">Contact</a>
                        <a className="navlist" href="#skills">Skills</a>
                        <a className="navlist" href="#education">Education</a>
                    </nav>
                    <div>
                        <p>Current time (seconds): {time}</p>
                    </div>
                    <button className="dark-mode-btn" onClick={toggleDarkMode}>
                        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
            </header>
    );
}

export default Header;
