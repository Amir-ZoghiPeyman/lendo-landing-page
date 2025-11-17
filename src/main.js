import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { renderHeader } from "./components/navbar.js";
import './styles/custom.scss';

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
        const headerContainer = document.createElement("header");
        headerContainer.innerHTML = renderHeader();
        app.prepend(headerContainer);
    }
});
