import { Link } from "react-router";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.mainSection}>
        <h1 className={styles.title}>
          Encontre colegas para ajudar a <span>executar suas ideias</span>{" "}
        </h1>
        <h3 className={styles.subtitle}>
          Monte uma equipe para executar as atividades das disciplinas ou tirar
          uma ideia do papel
        </h3>

        <div>
          {/* TODO: the below 'to' field value 
                        should depend on the user login state
                        /login if not logged
                        /projects if logged
           */}
          <Link to="/login">Compartilhe sua ideia</Link>
          <Link to="#projects">Explorar projetos</Link>
        </div>
      </div>
    </div>
  );
}
