import ProjectCard from "./ProjectCard";
import "./Styles/Projects.css";

// const recentWork = ["car-game.jpg","imageBazarre.png","google-sheet.jpg"];

const recentWork = [
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

// const stage2Work = ["taskManager.jpg","studentDirectory.jpg"];

const  stage2Work = [
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
    {
        linkk : "studentDirectory.jpg",
        title: "Student's Directory",
        website: "https://prakriti-2908.github.io/Student_Directory/"
    }
]

// const stage1Work = ["blinkit.jpg","food.jpg","fashion.jpg"];
const stage1Work = [
    {
        linkk : "blinkit.jpg",
        title: "Blinkit Clone",
        website: "https://prakriti-2908.github.io/Blinkit-Clone/"
    },
    {
        linkk : "food.jpg",
        title: "Restaurant App",
        website: "https://prakriti-2908.github.io/Restaurant-App/"
    },
    {
        linkk : "fashion.jpg",
        title: "Fashion Website",
        website: "https://prakriti-2908.github.io/Module-Test-F-1/"
    },
]
function Projects(){


    return(
        <div id="projects">
            <h2 id="myJourney">Let's See <span>"My Learning Journey"</span></h2>
            <h3>My Recent Works</h3>
            <div id="projectCardDiv">
                {recentWork.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
            <h3>Learning Stage-2 <span>Projects</span></h3>
            <div id="projectCardDiv">
            {stage2Work.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
            <h3>Learning Stage-1 <span>Projects</span></h3>
            <div id="projectCardDiv">
            {stage1Work.map((card,index)=>(
                    <ProjectCard key={index} card={card} />
                ))}
            </div>
        </div>
    );
}

export default Projects;