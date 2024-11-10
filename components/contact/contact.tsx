"use client"
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"; // Corrected import for FaLinkedin
import { IoLogoGithub } from "react-icons/io";
import styles from '../contact/contact.module.css'

export default function Contact() {
    return (
        <>
            <div className={styles.div}>
                <div className={styles.main}>
                    <h1 className={styles.h}>CONTACT US</h1>
                </div>
                <div className={styles.container}>
                    
                    <div className={styles.first}>
                        <div className={styles.mail}>
                            <IoIosContact className={styles.icon} />
                            <span>0310-0208544</span>  
                        </div>
                        <div className={styles.mail}>
                            <MdEmail className={styles.icon} />
                            <span>aqsawaqar253@gmail.com</span>
                        </div>
                        <div className={styles.mail}>
                            <FaFacebookSquare className={styles.icon} />
                            <a href="https://facebook.com/Aqsa Ashraf" target="_blank" rel="noopener noreferrer">
                                facebook.com/Aqsa Ashraf
                            </a>
                        </div>
                        <div className={styles.mail}>
                            <FaLinkedin className={styles.icon}/>
                            <a href="https://linkedin.com/in/Aqsa Ashraf Ashraf" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/aqsa waqar
                            </a>
                        </div>
                        <div className={styles.mail}>
                            <IoLogoGithub className={styles.icon} />
                            <a href="https://github.com/Aqsawaqar55/" target="_blank" rel="noopener noreferrer">
                                github.com/Aqsawaqar55
                            </a>
                        </div>
                    </div>

                    <div className={styles.second}>
    <h1 className={styles.h2}>Message me:</h1>
    <input 
        type="text" 
        className={styles.input}  
    />
    <button 
        className={styles.btn} 
        onClick={() => alert("Thank you for contacting us!\nAqsa Waqar\nI'll be in touch soon")}
    >
        Send
    </button>
</div>

                    
                </div>
                <div className={styles.pop}><h3 className={styles.h3}>@Thankyou for contacting us</h3></div> 
            </div>
        </>
    );
}
