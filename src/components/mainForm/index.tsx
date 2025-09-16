import { useRef } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Cycles } from "../cycles";
import { Form } from "../form";
import styles from "./style.module.css";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    console.log("ENVIANDO FORMULARIO");

    event.preventDefault();
    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: crypto.randomUUID(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "work",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
        },
        activeTask: newTask,
        currentCycle: 1, //todo conferir
        secondsRemaining, //todo conferir
        formattedSecondsRemaining: "00:00", //todo conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} action="">
        <div className={styles["form-row"]}>
          <Form ref={taskNameInput} />
        </div>
        <div className={styles["form-row"]}>
          <div>Lorem ipsum dolor sit amet consectetur</div>
        </div>

        <Container>
          <Cycles />
        </Container>

        <Container>
          <Button type="submit" typeButton="progress" />
        </Container>
      </form>
    </>
  );
}
