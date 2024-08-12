import { useContext } from "react";
import "./Styles/SkillCard.css";
import { ThemeContext } from "../App";

function SkillCard(skills){

    const { image, title, percentage, clas } = skills;

    const{theme} = useContext(ThemeContext);

    if (clas !== "redux") {
        return ( 
            <div className={`skillCard ${theme}BgSkillCard`}>
                <div id="flexRow">
                    <i className={`${image} ${clas}`}></i>
                    <p className="skillTitle">{title}</p>
                </div>
                <svg className="circle-svg" viewBox="0 0 36 36">
                    <path className={`${theme}Circle-bg`}
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                           r={5}
                    />
                    <path className={`circle ${theme}Circle`}
                        strokeDasharray={`${percentage}, 100`}
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className={`percentage ${theme}Percentage`}>{percentage}%</text>
                </svg>
                <p></p>
            </div>
        )
    }else{
        return(
            
            <div className={`skillCard ${theme}BgSkillCard`}>
                <div id="flexRow">
                    {/* <i className={`${image} ${clas}`}></i> */}
                    {/* <img src={image} alt={clas} className={clas} /> */}
                    <object className="reduxLogo" data="reduxLogo.svg" width="100" height="100"> </object>

                    <p className="skillTitle">{title}</p>
                </div>
                <svg className="circle-svg" viewBox="0 0 36 36">
                    <path className={`${theme}Circle-bg`}
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                           r={5}
                    />
                    <path className="circle"
                        strokeDasharray={`${percentage}, 100`}
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">{percentage}%</text>
                </svg>
                <p></p>
            </div>
        )
    }
}

export default SkillCard;
