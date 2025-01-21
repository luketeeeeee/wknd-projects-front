import { CodeXml } from "lucide-react";
import { Link } from "react-router";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <CodeXml className={styles.logoIcon} />
          <h1 className={styles.logoText}>Weekend Project</h1>
        </div>

        <div className={styles.headerInfoSection}>
          <Link to="/como-funciona" className={styles.link}>
            Como funciona
          </Link>
          <Link to="/projetos" className={styles.link}>
            Projetos
          </Link>
          <Link to="/auth" className={styles.startButton}>
            Começar agora
          </Link>
        </div>
      </div>
    </>
  );
}
