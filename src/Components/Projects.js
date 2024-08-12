import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import "./Styles/Projects.css";
import { ThemeContext } from "../App";

// const recentWork = ["car-game.jpg","imageBazarre.png","google-sheet.jpg"];

const recentWork = [
    {
        linkk : "chatterbox.jpg",
        title: "Chatterbox Chat-App",
        website: "https://main--chatterbox-31-29.netlify.app/"
    },
    {
        linkk : "TodoAuthenticated.jpg",
        title: "Todo Authenticated App",
        website: "https://todonode-12tn.onrender.com/"
        
    },
    {
        linkk : "codeEdiitor.jpg",
        title: "Code Editor",
        website: "https://main--code-editor-by-prakriti.netlify.app/"
    },
    {
        linkk : "blogging.jpg",
        title: "UrSoulVoice Blogging Social Media App",
        website: "https://drive.google.com/drive/folders/11rPffMFGWvykeNzVcw7glOxFid8-0X8Q?usp=sharing"
        
    },
    ]

// const stage2Work = ["taskManager.jpg","studentDirectory.jpg"];

const  stage2Work = [
    {
        linkk : "ytClone.png",
        title: "YT Clone",
        website: "https://prakriti-2908.github.io/Youtube-Clone/"
        
    },
    {
        linkk : "car-game.jpg",
        title: "Car Racing Game",
        website: "https://prakriti-2908.github.io/Car-Racing-Game/"
        
    },
    {
        linkk : "imageBazarre.png",
        title: "Image Bazarre App",
        website: "https://664cec6e64fc2800969bf26c--sage-platypus-bdf255.netlify.app/"
    },
    {
        linkk : "google-sheet.jpg",
        title: "Google Sheet Clone",
        website: "https://prakriti-2908.github.io/Google-Sheet-Clone/"
    },
    
]

// const stage1Work = ["blinkit.jpg","food.jpg","fashion.jpg"];
const stage1Work = [
    {
        linkk : "prevPortfolio.png",
        title: "Previous Portfolio",
        website: "https://coruscating-scone-37fc93.netlify.app/"
    },
    {
        linkk : "mcq.png",
        title: "MCQ-Question War",
        website: "https://664f3e6b1675e10f35e750a3--rad-semolina-5db58d.netlify.app/"
    },
    {
        linkk : "taskManager.jpg",
        title: "Task Manager",
        website: "https://prakriti-2908.github.io/task-manager/"
    },
]
function Projects(){

    const {theme} = useContext(ThemeContext);


    return(
        <div id="projects">
            <h2 id="myJourney" className={`${theme}Bg`}>Let's See <span>"My Learning Journey"</span></h2>
            <h3 className={`${theme}H3`}>My Recent Works</h3>
            <div id="projectCardDiv" className={`${theme}Bg`}>
                {recentWork.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
            <h3 className={`${theme}H3`}>Learning Stage-2 <span>Projects</span></h3>
            <div id="projectCardDiv" className={`${theme}Bg`}>
            {stage2Work.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
            <h3 className={`${theme}H3`}>Learning Stage-1 <span>Projects</span></h3>
            <div id="projectCardDiv" className={`${theme}Bg`}>
            {stage1Work.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
        </div>
    );
}

export default Projects;