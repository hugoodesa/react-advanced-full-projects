import { Timer } from "lucide-react";
import styles from "./style.module.css";

export function Logo() {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href="#">
        <Timer />
      </a>
    </div>
  );
}
