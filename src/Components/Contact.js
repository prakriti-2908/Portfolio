import { useContext } from "react";
import "./Styles/Contact.css";
import { ThemeContext } from "../App";

const Contact = () => {

    const{theme} = useContext(ThemeContext);

    return(
        <div id="contact">
            <h2 id="letsConnect" className={`${theme}Bg`}>Let's <span>Connect</span></h2>
            <div id="contactGrid">
                <div id="leftContact">
                    <p id="contactThank">Thank you for taking the time to review my portfolio. If you're interested in know more about me and my work or would like to discuss potential employment opportunities, I would love to hear from you! I work hard and wiil be great asset for you. You can reach me using the contact information.</p>

                    <div className={`${theme}Contacts`}>
                        <p>Address</p>
                        <p>New Delhi, Delhi</p>
                    </div>

                    <div className={`${theme}Contacts`}>
                        <p>Phone no.</p>
                        <p>8860333616</p>
                    </div>
                    <div className={`${theme}Contacts`}>
                        <p>E-mail</p>
                        <a href="mailto:prakritijha29aug@gmail.com">
                        <p>prakritijha29aug@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div id="contactForm" className={`${theme}Form`}>
                    <form action="mailto:prakritijha29aug@gmail.com" method="post" enctype="text/plain">
                        Name:
                        <br/>
                        <input type="text" name="name"/>
                        <br/> E-mail:
                        <br/>
                        <input type="text" name="mail"/>
                        <br/> Comment:
                        <br/>
                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                        </textarea>
                        <br/>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;