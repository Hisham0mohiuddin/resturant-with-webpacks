export default function loadMenu() {
    const content = document.querySelector(".content");
    const menu = document.createElement("div");
    menu.innerHTML = `
    <h2>Menu</h2>
    <ul>
      <li>Burger</li>
      <li>Pizza</li>
    </ul>
  `;
    content.appendChild(menu);

}