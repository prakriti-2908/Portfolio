import "./Styles/ProjectCard.css";
import { useState } from "react";

function ProjectCard({card}){

    const[hiddenDisplay,setHiddenDisplay] = useState("none");



    return(
        <div className="projectCardContainer" >
            <div className="projectCard" 
            onMouseEnter={()=>{setHiddenDisplay("block")}}
            onMouseLeave={() => setHiddenDisplay("none")}
            >
                <img src={card.linkk} alt={card.title}/>
            </div>
            <a href={card.website} target="_blank" rel="noreferrer">
            <button 
            className="visitBtn"
            style={{display:hiddenDisplay}}
            >
            <span>
              Visit
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <p>{card.title}</p>
            </button>
            </a>
        </div>
    )
}

export default ProjectCard;