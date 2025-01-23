import { useState } from "react";

import { LoginForm } from "../../types/auth.types";
import styles from "./Login.module.css";

export default function Login() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  return (
    <div className={styles.loginContainer}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="password">
          Senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="*********"
        />
      </div>

      <button className={styles.loginButton}>Entrar</button>
    </div>
  );
}
