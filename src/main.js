import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { home } from "./pages/home";
import './styles/scss/main.scss';

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  home(app);
});
