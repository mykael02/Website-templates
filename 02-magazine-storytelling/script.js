document.querySelectorAll("article").forEach((card, i) => {
  card.style.transform = "translateY(12px)";
  card.style.opacity = "0";
  setTimeout(() => {
    card.style.transition = "all .4s ease";
    card.style.transform = "translateY(0)";
    card.style.opacity = "1";
  }, 120 * (i + 1));
});
