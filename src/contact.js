export default function loadContact() {
    const content = document.querySelector(".content");
    const contact = document.createElement("div");
    contact.innerHTML = `
    <h2>Contact Us</h2>
    <p>Phone: 123-456-7890</p>
  `;
    content.appendChild(contact);
}
