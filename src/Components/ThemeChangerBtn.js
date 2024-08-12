import { useContext, useState } from 'react';
import './Styles/ThemeChangerBtn.css';
import { ThemeContext } from '../App';

function ThemeChangerBtn(){

    const {changeBlack,changePurple,changeWhite,theme} = useContext(ThemeContext);
    const [visible,setVisible]= useState(false);

    return(
        <div>
            <button className={`themeButton ${theme}Btn`} onClick={()=>{setVisible(!visible)}}>Change Theme</button>
            {
                visible &&
                <div id="themeBtnDiv">
                    <div onClick={changeBlack} className="black themeBtn"></div>
                    <div onClick={changePurple} className="purple themeBtn"></div>
                    <div onClick={changeWhite} className="white themeBtn"></div>
                </div>
            }
        </div>
    )
}

export default ThemeChangerBtn;