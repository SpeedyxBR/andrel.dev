import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/background-dark.scss";

const html = document.querySelector("html");
const theme = localStorage.getItem("theme") ?? "dark";

if (theme === "dark") {
  html?.classList.add("dark");
  document.body.classList.add("dark-background");
  document.body.classList.remove("light-background");
} else {
  html?.classList.remove("dark");
  document.body.classList.add("light-background");
  document.body.classList.remove("dark-background");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
