const cards = document.querySelectorAll('.card-item');
cards.forEach((card) => card.addEventListener("click", () => card.classList.toggle("do-flip")));