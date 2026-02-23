// ---------------------
// BURGER MENU
// ---------------------
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Ouvrir/fermer menu burger
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// ---------------------
// DARK MODE
// ---------------------
const toggle = document.getElementById("darkToggle");

// Vérifier le mode stocké
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// Toggle dark mode
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
});
