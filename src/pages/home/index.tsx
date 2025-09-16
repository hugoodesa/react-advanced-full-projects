import { MainTemplate } from "../../templates/MainTemplate";
import { MainForm } from "../../components/mainForm";
import { Counter } from "../../components/counter";

export function Home() {
  return (
    <MainTemplate>
      <Counter />
      <MainForm />
    </MainTemplate>
  );
}
