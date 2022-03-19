import styles from "../styles/components/mainContainer.module.css"

import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Navbar from "./NavbarComponent"

export default function MainContainer({children}) {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}