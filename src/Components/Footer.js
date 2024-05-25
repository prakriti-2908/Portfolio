import "./Styles/Footer.css";


const Footer = () => {


    return(
        <div id="footer">
            <div id="btns">
            <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button>
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
                <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>   
          
            </div>
            <div id="icons">
            <a href="https://github.com/prakriti-2908?tab=repositories"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/prakriti-jha-8014502a4/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:prakritijha29aug@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://wa.me/918860333616"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
            <div id="para">
                <p>Developed with <i class="fa-solid fa-heart"></i> By Prakriti</p>
            </div>
        </div>
    )
}

export default Footer;