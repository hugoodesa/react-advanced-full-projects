import { Input } from "../input";
import styles from "./style.module.css";

type FormProps = {
} & React.ComponentProps<"input"> ;

export function Form({...rest}:FormProps) {
  return (
    <div className={styles.container}>
      <Input placeholder="task" type="text" id="task" label="task" ref={rest.ref} />
    </div>
  );
}
