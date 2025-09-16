import { House, TimerReset, Settings, Sun, Moon } from "lucide-react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

type ThemeType = "dark" | "light";

export function Menu() {
  const size = 30;
  const backgroundColor = "#0a0f1a";

  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem("theme") as ThemeType) || "dark";
  });

  const handleThemeChange = (e: React.MouseEvent) => {
    e.preventDefault();

    setTheme((prevTheme) => {
      return prevTheme == "dark" ? "light" : "dark";
    });
  };

  const nextTheme = {
    dark: <Sun size={size} color={backgroundColor} />,
    light: <Moon size={size} color={backgroundColor} />,
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    console.log(localStorageTheme);
    if (localStorageTheme != null) {
      setTheme(localStorageTheme as ThemeType);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <IconContainer>
        <a href="#" aria-label="home" title="home">
          <House size={size} color={backgroundColor} />
        </a>
      </IconContainer>
      <IconContainer>
        <a href="#" aria-label="timer" title="timer">
          <TimerReset size={size} color={backgroundColor} />
        </a>
      </IconContainer>
      <IconContainer>
        <a href="#" aria-label="configuracoes" title="configuracoes">
          <Settings size={size} color={backgroundColor} />
        </a>
      </IconContainer>
      <IconContainer>
        <a
          href="#"
          aria-label="Theme"
          title="Theme"
          onClick={handleThemeChange}
        >
          {nextTheme[theme]}
        </a>
      </IconContainer>
    </div>
  );
}

type IconContainer = {
  children: React.ReactNode;
};

const IconContainer = ({ children }: IconContainer) => {
  return (
    <a href="#">
      <div className={styles.icon}>{children}</div>
    </a>
  );
};
