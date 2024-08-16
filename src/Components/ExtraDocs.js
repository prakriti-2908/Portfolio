import { useContext } from 'react';
import './Styles/ExtraDocs.css';
import { ThemeContext } from '../App';

function ExtraDocs(){

    const{theme} = useContext(ThemeContext);

    return(
        <div id='moreDocs'>
            <h2 id="extraDocs" className={`${theme}Bg`}>Download <span>More Documents</span></h2>
            <div className={`extraDocs ${theme}ExtraDocs`}>
                <a href="/acciojobProfile.pdf" className="lor" download="Prakriti Jha coding Profile.pdf">Coding Profile</a>
                <a href="/lor.pdf" className="lor" download="Prakriti Jha LOR.pdf">Letter Of Recommendation</a>
                <a href="/MARKSHEETS.pdf" className="lor" download="Prakriti Jha Marksheets.pdf">Marksheets</a>
                <a href="/RESUME.pdf" className="lor" download="Prakriti Jha Resume.pdf">Resume</a>
                <a href="/certificate.png" className="lor" download="Prakriti Jha Certificate.png">Certificate</a>
            </div>
        </div>
    )

}


export default ExtraDocs;