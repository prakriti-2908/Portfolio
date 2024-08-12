import { useContext } from "react";
import "./Styles/EducationCard.css";
import { ThemeContext } from "../App";


function EducationCard(card){
    const{course,institute,duration,score} = card;

    const{theme} = useContext(ThemeContext);

    return(
        <div id="card" className={`${theme}Card`}>
            <p id={`cardHeading`}>{course}</p>
            <p id="institute">{institute}</p>
            <div className="flex">
                <p id="cardDuration">{duration}</p>
                <p id="cardScore">{score}</p>
            </div>
        </div>
    )
}

export default EducationCard;