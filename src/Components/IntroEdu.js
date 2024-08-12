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
                    <p>I'm Prakriti Jha. I'm from Delhi. I will be graduating with BTech in Electronic and Communication Engineerng from GGSIPU in August, 2024. 
                    <br />
                    <br />
                    Currently, I'm immersed in learning the MERN stack at Accio Job, where I'm sharpening my skills in JavaScript, React, HTML, and CSS. With proficiency in Redux, SCSS, and Tailwind CSS, I've embarked on numerous personal projects to refine my craft.
                    <br />
                    <br />
                    Now, I'm eagerly seeking entry-level opportunities as a frontend developer to apply my expertise and contribute to impactful projects.
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