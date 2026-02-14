const btn = document.getElementById("pulseBtn");
btn.addEventListener("click", () => {
  document.body.classList.add("pulse");
  setTimeout(() => document.body.classList.remove("pulse"), 260);
});
