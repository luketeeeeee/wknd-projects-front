import { CodeXml } from "lucide-react";
import { useState } from "react";

import styles from "./AuthPage.module.css";

export default function AuthPage() {
  const [authModeSelector, setAuthModeSelector] = useState("login");

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.logo}>
        <CodeXml className={styles.logoIcon} />
        <h1 className={styles.logoText}>Weekend Project</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.topSection}>
          <h1>Bem-vindo</h1>
          <p>Seja parte da comunidade e comece a criar projetos incríveis</p>
        </div>

        <div className={styles.formsContainer}>
          {/* TODO: conditional to check if the value selected is for login or register form  */}
          login register section
          <div>google auth</div>
        </div>
      </div>

      <p>terms and conditions</p>
    </div>
  );
}
