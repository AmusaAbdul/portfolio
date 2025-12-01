document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector(".instagram") ? .addEventListener("click", () => { window.open("https://www.instagram.com/ikemi_concept?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank", "noopener,noreferrer") });
document.querySelector(".whatsapp") ? .addEventListener("click", () => { window.open("https://wa.me/23409055444513   ", "_blank", "noopener,noreferrer") });
document.querySelector(".x") ? .addEventListener("click", () => { window.open("", "_blank", "noopener,noreferrer") });
document.querySelector(".tiktok") ? .addEventListener("click", () => { window.open("https://www.tiktok.com/@glambyikemi?_r=1&_t=ZS-91Z18PVwivK", "_blank", "noopener,noreferrer") });
document.querySelector(".snapchat") ? .addEventListener("click", () => { window.open("https://snapchat.com/t/9GETyoxN", "_blank", "noopener,noreferrer") });
const bookingForm = document.querySelector(".booking-form");
if (bookingForm) { bookingForm.addEventListener("submit", (e) => { e.preventDefault();
        alert("Booking confirmed!");
        bookingForm.reset() }) }
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-links.mobile");
const navLinks = document.querySelectorAll(".nav-links.mobile li");
hamburger.addEventListener("click", () => { mobileNav.classList.toggle("active");
    hamburger.classList.toggle("open") });
document.addEventListener("click", (e) => { if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) { mobileNav.classList.remove("active");
        hamburger.classList.remove("open") } });
navLinks.forEach(link => { link.addEventListener("click", () => { mobileNav.classList.remove("active");
        hamburger.classList.remove("open") }) })