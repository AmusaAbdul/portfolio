import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <img className="profile-pic" src="/assets/mypic.png" alt="My Picture" />
            <div className="header-info">
                <h1>Amusa Abdullah</h1>
                <p>Frontend Developer | Web Enthusiast</p>
                <nav>
                    <Link className='navlist' to="/about">About</Link>
                    <Link className='navlist' to="/projects">Projects</Link>
                    <Link className='navlist' to="/contact">Contact</Link>
                    <Link className='navlist' to="/skills">Skills</Link>
                    <Link className='navlist' to="/education">Education</Link>
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
