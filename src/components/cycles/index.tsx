import styles from "./style.module.css";

export function Cycles() {
  return (
    <div>
      <div className={styles.title}>Ciclos:</div>
      <div className={styles.container}>
        <div className={`${styles.work} ${styles.cycle}`}></div>
        <div className={`${styles.break} ${styles.cycle}`}></div>
        <div className={`${styles.work} ${styles.cycle}`}></div>
        <div className={`${styles.break} ${styles.cycle}`}></div>
        <div className={`${styles.work} ${styles.cycle}`}></div>
        <div className={`${styles.break} ${styles.cycle}`}></div>
        <div className={`${styles.work} ${styles.cycle}`}></div>
        <div className={`${styles.rest} ${styles.cycle}`}></div>
      </div>
    </div>
  );
}
