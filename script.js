/* ================= MOBILE MENU TOGGLE ================= */
function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");

    // Close menu if click outside
    document.addEventListener("click", function(event) {
        const menuIcon = document.querySelector(".menu-icon");
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
}

/* ================= CONTACT FORM ================= */
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Show success message
    successMsg.classList.add("show");

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.classList.remove("show");
    }, 3000);

    form.reset(); // Clear form inputs

    // OPTIONAL: Send form data to email or backend using fetch/ajax here
});

/* ================= AUTO YEAR ================= */
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/* ================= TAB SWITCHING ================= */
function opentab(tabName, event) {
    // Remove active-tab class from all tab contents
    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(tab => tab.classList.remove('active-tab'));

    // Remove active-link class from all tab links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => link.classList.remove('active-link'));

    // Add active-tab to clicked tab
    document.getElementById(tabName).classList.add('active-tab');

    // Add active-link to clicked tab link
    event.currentTarget.classList.add('active-link');
}
