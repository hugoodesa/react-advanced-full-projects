import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import styles from "./style.module.css";

export function Counter() {
  const { state } = useTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
