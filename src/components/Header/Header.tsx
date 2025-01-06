import { CodeXml } from "lucide-react"

import styles from "./Header.module.css"

export default function Header() {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.logo}>
					<CodeXml className={styles.logoIcon}/>
					<h1 className={styles.logoText}>Weekend Projects</h1>
				</div>

			</div>
		</>
	)
}