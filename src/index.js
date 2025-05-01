import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./index.css"

let content = document.querySelector(".content");
let buttons = document.querySelectorAll("button");

function clearContent() {
    content.innerHTML = "";
}
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.classList.contains("home")) {
            clearContent();
            loadHome();
        } else if (e.target.classList.contains("menu")) {
            clearContent();
            loadMenu();
        } else if (e.target.classList.contains("contact")) {
            clearContent();
            loadContact();
        }
    })
});