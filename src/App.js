import './App.css';
import Home from './Components/Home';
import IntroEdu from './Components/IntroEdu';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skillset from './Components/Skillset';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



let cursor=document.querySelector('.ball');
let smallCursor=document.querySelector('.smallBall');

document.onmousemove = function(e) {  
    let x= e.clientX;
    let y= e.clientY;

    cursor.style.left= x+'px';
    cursor.style.top= y+'px';
    smallCursor.style.left= (x+15)+'px';
    smallCursor.style.top= (y+13)+'px';
};



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <IntroEdu/>
      <Skillset/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
