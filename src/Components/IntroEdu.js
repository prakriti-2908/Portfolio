import { useContext } from "react";
import EducationCard from "./EducationCard";
import "./Styles/IntroEdu.css";
import { ThemeContext } from "../App";

const card = [
    {
        course: "BTech (Electronics & Communication Engineering)",
        institute: "Guru Gobind Singh Indraprastha University",
        duration: "05/2020- 08/2024",
        score: "CGPA: 8.84",
    },
    {
        course: "Higher Secondary (CBSE)",
        institute: "Victoria Girls Senior Secondary School",
        duration: "04/2019 - 04/2020",
        score: "Percentage: 78.8",
    },
    {
        course: "Secondary (CBSE)",
        institute: "Victoria Girls Senior Secondary School",
        duration: "04/2018 - 04/2019",
        score: "Percentage: 82.8",
    }
]


function IntroEdu(){

    const {theme} = useContext(ThemeContext);


    return(
        <div id="about" className={`${theme}Bg`}>
            <h2 id="aboutMe">About <span>Me</span></h2>

            <div id="gridd">
                <div className={`${theme}Intro`}>
                    <h2 className="gridHeader">Introduction</h2>
                    <p>I graduated from GGSIPU in Electronics and Communication Engineering. During my studies, I worked on projects like a Smart Energy Monitoring System and an Obstacle Avoidance Car. My research on the Smart Energy Monitoring System was published at NCBISF.
                    <br />
                    <br />
                    My interest in computer science grew as I learned Object-Oriented Programming in JavaScript. I soon delved into web development, starting with HTML and CSS, and progressing to frameworks like React.js and server-side technologies like Node.js.
                    <br />
                    <br />
                    I believe in learning by doing. To apply my skills, I developed projects such as Chatterbox, UrSoulVoice, and a Car Racing Game, which helped solidify my understanding of web development.

                    </p>
                </div>
                <div className={`${theme}Education`}>
                    <h2 className={`gridHeader ${theme}BgGridGeader`}>Education</h2>
                    <div className="cards">
                        {card.map((c,index)=>(
                            <EducationCard key={index} {...c}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroEdu;