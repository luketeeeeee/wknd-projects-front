import { useState } from "react";

import { RegisterFormType } from "../../types/auth.types";
import { handleTextInputChange } from "../../utils/handleTextInputChange";
import styles from "./Register.module.css";

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormType>({
    name: "",
    email: "",
    degree: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form className={styles.registerContainer}>
      <div className={styles.field}>
        <label htmlFor="name">Nome</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Memphis Depay"
          value={formData.name}
          onChange={(e) => handleTextInputChange(e, setFormData)}
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
          value={formData.email}
          onChange={(e) => handleTextInputChange(e, setFormData)}
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
          value={formData.degree}
          onChange={(e) => handleTextInputChange(e, setFormData)}
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
          value={formData.password}
          onChange={(e) => handleTextInputChange(e, setFormData)}
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
          value={formData.confirmPassword}
          onChange={(e) => handleTextInputChange(e, setFormData)}
        />
      </div>

      <button
        className={styles.registerButton}
        onClick={() => console.log(formData)}
      >
        Criar conta
      </button>
    </form>
  );
}
