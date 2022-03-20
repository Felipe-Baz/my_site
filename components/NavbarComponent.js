import styles from "../styles/components/navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>Sobre</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contatos</a></Link>
                </li>
                <li>
                    <Link href="/account/signin"><a>Entrar</a></Link>
                </li>
            </ul>
        </>
    )
}