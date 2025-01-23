import { CodeXml } from "lucide-react";
import { useState } from "react";

import { GoogleLoginButton } from "../../components/GoogleLoginButton";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
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

          <div className={styles.authModeSelectors}>
            <button
              onClick={() => setAuthModeSelector("login")}
              className={`${authModeSelector === "login" ? styles.selectedMode : styles.unselectedMode} ${styles.authModeButton}`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthModeSelector("register")}
              className={`${authModeSelector === "register" ? styles.selectedMode : styles.unselectedMode} ${styles.authModeButton}`}
            >
              Cadastro
            </button>
          </div>
        </div>

        <div className={styles.formsContainer}>
          {authModeSelector === "login" ? <Login /> : <Register />}

          <div className={styles.divider}>
            <span>Ou continue com</span>
          </div>

          <div className={styles.googleLoginButton}>
            <GoogleLoginButton
              onSuccess={() => console.log("ok")}
              onFailure={() => console.log("not ok")}
            />
          </div>
        </div>
      </div>

      <p>terms and conditions</p>
    </div>
  );
}
