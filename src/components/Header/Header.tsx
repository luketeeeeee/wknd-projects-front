import { CodeXml } from "lucide-react"
import { Link } from "react-router"

import styles from "./Header.module.css"

export default function Header() {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.logo}>
					<CodeXml className={styles.logoIcon}/>
					<h1 className={styles.logoText}>Weekend Projects</h1>
				</div>

				<div className={styles.headerInfoSection}>
					<Link to="/como-funciona">Como funciona</Link>
					<Link to="/projetos">Projetos</Link>
					<Link to="/login">Começar agora</Link>
				</div>
			</div>
		</>
	)
}