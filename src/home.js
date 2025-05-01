import "./home.css"
import imageee from "./assests/monsoon-will-take-you.jpg"
export default function loadHome() {
    const content = document.querySelector(".content");
    const home = document.createElement("div");
    home.classList.add("homedom");
    const image = document.createElement("img");
    image.src = imageee;
    image.alt = "Restaurant interior";
    home.innerHTML = `
    <h1>welcome to my resturant</h1>
    <p> best food in town!</p>
    `;
    home.appendChild(image);
    content.appendChild(home);


}