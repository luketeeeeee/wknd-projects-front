import { ArrowRight, Code2, Rocket, Users } from "lucide-react";
import { Link } from "react-router";

import { cardsArray } from "./cards";
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

        <div className={styles.mainNavMenu}>
          {/* TODO: the below 'to' field value 
                        should depend on the user login state
                        /login if not logged
                        /projects if logged
           */}
          <Link to="/login" className={styles.shareIdeasButton}>
            Compartilhe sua ideia
            <ArrowRight />
          </Link>
          <Link to="#projects" className={styles.exploreButton}>
            Explorar projetos
          </Link>
        </div>
      </div>

      <div className={styles.mainInfoSection}>
        <h1>Como funciona</h1>

        <div className={styles.infoCards}>
          <div className={styles.card}>
            <div>
              <Rocket />
            </div>
            <h2>Compartilhe sua ideia</h2>
            <p>
              Publique suas ideias com uma pequena descrição e habilidades que
              você julga necessárias
            </p>
          </div>

          <div className={styles.card}>
            <div>
              <Users />
            </div>
            <h2>Monte sua equipe</h2>
            <p>
              Publique suas ideias com uma pequena descrição e habilidades que
              você julga necessárias
            </p>
          </div>

          <div className={styles.card}>
            <div>
              <Code2 />
            </div>
            <h2>Desenvolva</h2>
            <p>
              Ponha as suas ideias (ou atividades) em prática para
              transformá-las em realidade
            </p>
          </div>
        </div>
      </div>

      <div className={styles.projectCards}>
        <h1>Veja alguns projetos</h1>
        <div className={styles.projectsCarousel}></div>
      </div>
    </div>
  );
}
