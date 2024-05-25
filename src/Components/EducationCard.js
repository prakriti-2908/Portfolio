import "./Styles/EducationCard.css";


function EducationCard(card){
    const{course,institute,duration,score} = card;

    return(
        <div id="card">
            <p id="cardHeading">{course}</p>
            <p id="institute">{institute}</p>
            <div className="flex">
                <p id="cardDuration">{duration}</p>
                <p id="cardScore">{score}</p>
            </div>
        </div>
    )
}
export default EducationCard;