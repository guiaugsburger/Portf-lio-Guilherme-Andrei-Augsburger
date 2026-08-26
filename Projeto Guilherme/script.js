const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        mobileMenu.classList.toggle("open", !isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.setAttribute("aria-expanded", "false");
            mobileMenu.classList.remove("open");
        });
    });
}

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector(".form-feedback");

if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const subject = encodeURIComponent(`Contato pelo portfólio — ${formData.get("name")}`);
        const body = encodeURIComponent(
            `Nome: ${formData.get("name")}\nE-mail: ${formData.get("email")}\n\n${formData.get("message")}`
        );
        const mailto = `mailto:guiaugs123@gmail.com.br?subject=${subject}&body=${body}`;

        feedback.textContent = "Sua mensagem está pronta. ";
        const emailLink = document.createElement("a");
        emailLink.href = mailto;
        emailLink.textContent = "Abrir no seu e-mail ↗";
        feedback.appendChild(emailLink);
        contactForm.reset();
    });
}

const year = document.querySelector("#current-year");
if (year) {
    year.textContent = new Date().getFullYear();
}