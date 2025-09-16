import { CirclePlay } from "lucide-react";
import styles from "./index.module.css";

type ButtonProps = {
  typeButton: "progress" | "stop";
} & React.ComponentProps<"button">;

export function Button({ typeButton, ...rest }: ButtonProps) {
  const isProgress = typeButton == "progress";
  const buttonStyle = isProgress ? styles.buttonProgress : styles.buttonStop;

  return (
    <div>
      <button {...rest} className={`${styles.button} ${buttonStyle}`}>
        <CirclePlay color="aliceblue" />
      </button>
    </div>
  );
}
