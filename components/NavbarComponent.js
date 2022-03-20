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
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/products"><a>Products</a></Link>
                </li>
                <li>
                    <Link href="/login"><a>Login</a></Link>
                </li>
                <li>
                    <Link href="/register"><a>Register</a></Link>
                </li>
            </ul>
        </>
    )
}