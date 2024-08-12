import { useContext } from "react";
import SkillCard from "./SkillCard";
import "./Styles/Skillset.css";
import { ThemeContext } from "../App";

const skills = [
    {
        image:"fa-brands fa-js",
        title: "JavaScript",
        percentage: "85",
        clas: "js"
    },
    {
        image:"fa-brands fa-node",
        title: "NodeJS",
        percentage: "85",
        clas: "nodejs"
    },
    {
        image:"fa-brands fa-node-js",
        title: "ExpressJS",
        percentage: "80",
        clas: "expressjs"
    },
    {
        image:"fa-solid fa-database",
        title: "MongoDB",
        percentage: "85",
        clas: "mongodb"
    },
    {
        image:"fa-solid fa-plug",
        title: "Socket.io",
        percentage: "75",
        clas: "socketio"
    },
    {
        image: "fa-brands fa-react",
        title: "React.js",
        percentage: "80",
        clas: "react"
    },
    {
        title: "Redux.js",
        percentage: "70",
        clas: "redux"
    },
    {
        image: "fa-brands fa-html5",
        title: "HTML 5",
        percentage: "85",
        clas: "html5"
    },
    {
        image: "fa-brands fa-css3-alt",
        title: "CSS",
        percentage: "80",
        clas: "css"
    },
    {
        image: "fa-brands fa-sass",
        title: "SASS",
        percentage: "70",
        clas: "sass"
    },
    {
        image: "fa-brands fa-bootstrap",
        title: "Bootstrap",
        percentage: "70",
        clas: "bootstrap"
    }
]



function Skillset(){

    const {theme} = useContext(ThemeContext);



    return(
        <div id="skills">
            <h2 className={`mySkillSet ${theme}Bg`}>My <span>Skillset</span></h2>
            <div className="flex">
                <h2>Skills I Have</h2>
                <h2 className={`${theme}Tools`}>Tools I Use</h2>
                    </div>
                {/* <object data="reduxLogo.svg" width="300" height="300"> </object> */}
                <div id="mySkillsDiv">
                    {skills.map((c,index)=>(
                        <SkillCard key={index} {...c}/>
                    ))}
            </div>
        </div>
    )
}

export default Skillset;