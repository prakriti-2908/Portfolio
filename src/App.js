import './App.css';
import Home from './Components/Home';
import IntroEdu from './Components/IntroEdu';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skillset from './Components/Skillset';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ExtraDocs from './Components/ExtraDocs';
import { createContext, useEffect, useState } from 'react';
import ThemeChangerBtn from './Components/ThemeChangerBtn';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('black');

  const changePurple = () => setTheme('purple');
  const changeWhite = () => setTheme('white');
  const changeBlack = () => setTheme('black');

  useEffect(() => {
    const themeStyles = {
      white: {
        backgroundColor: '#F2F2F2',
        color: 'black',
        scrollbarTrackColor: '#BDBABA',
        scrollbarThumbColor: '#E2DFDF',
        cursorColor: '#00247C',
        cursorShadow: '#00247C',
      },
      purple: {
        backgroundColor: '#290942',
        color: '#ECDDF5',
        scrollbarTrackColor: '#180229',
        scrollbarThumbColor: '#412657',
        cursorColor: '#D6C376',
        cursorShadow: '#D6C376',
      },
      black: {
        backgroundColor: '#010101',
        color: 'white',
        scrollbarTrackColor: '#302F2F',
        scrollbarThumbColor: '#686767',
        cursorColor: '#FE2121',
        cursorShadow: '#FE2121',
      },
    };

    const { backgroundColor, color, scrollbarTrackColor, scrollbarThumbColor, cursorColor, cursorShadow } = themeStyles[theme];
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;

    // Update custom properties for scrollbar styling
    document.documentElement.style.setProperty('--scrollbar-track-color', scrollbarTrackColor);
    document.documentElement.style.setProperty('--scrollbar-thumb-color', scrollbarThumbColor);

    // Update cursor styles based on theme
    const cursor = document.querySelector('.ball');
    const smallCursor = document.querySelector('.smallBall');

    if (cursor && smallCursor) {
      cursor.style.border = `3px solid ${cursorColor}`;
      smallCursor.style.backgroundColor = cursorColor;
      smallCursor.style.boxShadow = `0px 0px 13px 1px ${cursorShadow}`;
    }
  }, [theme]);

  useEffect(() => {
    const cursor = document.querySelector('.ball');
    const smallCursor = document.querySelector('.smallBall');

    const handleMouseMove = (e) => {
      if (cursor && smallCursor) {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        smallCursor.style.left = `${x + 15}px`;
        smallCursor.style.top = `${y + 13}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ changePurple, changeWhite, changeBlack, theme }}>
        <ThemeChangerBtn />
        <Navbar />
        <Home />
        <IntroEdu />
        <Skillset />
        <Projects />
        <ExtraDocs />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
