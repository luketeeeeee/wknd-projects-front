import CodeIcon from "../../assets/icons/code2.svg"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <img src={CodeIcon} alt="Weekend Projects Logo" className={styles.logo} />
                <h1>Weekend Projects</h1>
            </div>
        </>
    )
}