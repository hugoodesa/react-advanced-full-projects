import type { JSX } from "react";
import styles from "./style.module.css";

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <a href="#">Entenda a técnica de pomodore</a>
      <a href="#">Chornos Pomodore 2025 - Feito com amor</a>
    </div>
  );
};
