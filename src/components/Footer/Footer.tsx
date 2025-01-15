import { Link } from "react-router";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <p className={styles.footerInfo}>
        Weekend Projects | Feito por{" "}
        <Link to="https://github.com/luketeeeeee" className={styles.link}>
          @luketeeeeee
        </Link>
      </p>
    </>
  );
}
