import "./styles/theme.css";
import "./styles/global.css";
import { type JSX } from "react";
import { Home } from "./pages/home";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";

export function App(): JSX.Element {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
