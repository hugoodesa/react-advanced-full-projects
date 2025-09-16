import styles from "./style.module.css";

type InputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<"input">;

export function Input({ type, label, id, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={label}
        id={id}
        placeholder="Digite o nome da tarefa"
        {...rest}
      />
    </div>
  );
}
