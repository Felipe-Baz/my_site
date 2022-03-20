import styles from "../styles/components/footer.module.css"
import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <ul>
                        <li>
                            <a href="https://twitter.com/julesforrest">Twitter</a>
                        </li>
                        <li>
                            <a href="https://codepen.io/julesforrest">Codepen</a>
                        </li>
                        <li>
                            <a href="mailto:julesforrest@gmail.com">Email</a>
                        </li>
                        <li>
                            <a href="https://dribbble.com/julesforrest">Dribbble</a>
                        </li>
                        <li>
                            <a href="https://github.com/julesforrest">Github</a>
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