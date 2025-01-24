import { useState } from "react";
import styles from "./Register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData();
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.field}>
        <label htmlFor="name">Nome</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Memphis Depay"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="degree">Curso</label>
        <input
          className={styles.input}
          type="text"
          id="degree"
          name="degree"
          placeholder="Ciência da Computação"
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

      <div className={styles.field}>
        <label className={styles.label} htmlFor="confirmPassword">
          Confirmar senha
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirmaPassword"
          name="confirmPassword"
          placeholder="*********"
        />
      </div>

      <button className={styles.registerButton}>Criar conta</button>
    </div>
  );
}
