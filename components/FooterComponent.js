import styles from "../styles/components/footer.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <p>
                        Made by Felipe Baz Mitsuishi 
                    </p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/felipe-baz-mitsuishi/"><FaLinkedin /> Linkedin</a>
                        </li>
                        <li>
                            <a href="mailto:fbazmitsuishi@gmail.com"><IoMdMail /> Email</a>
                        </li>
                        <li>
                            <a href="https://github.com/felipe-baz"><FaGithub /> Github</a>
                        </li>
                        <li>
                            <p>👋</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}