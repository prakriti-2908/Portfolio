import React, { useContext } from 'react';
import "./Styles/Navbar.css";
import { ThemeContext } from '../App';

function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <div id="header" className={`${theme}Bg`}>
            <nav className={`${theme}Bg`}>
                <div id="myName" className={`${theme}Bg`}>
                    <h1>Prakriti <span>Jha</span></h1>
                </div>
                <div className={`${theme}BgBtn`}>
                    <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button>
                    <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
                    <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
                    <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
                    <button onClick={() => document.getElementById('moreDocs').scrollIntoView({ behavior: 'smooth' })}>More Documents</button>
                    <div id="flag">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India" />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
