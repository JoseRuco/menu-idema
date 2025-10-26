  const toggles = document.querySelectorAll(".categoria-toggle");
  let abiertas = []; // aquí guardamos las categorías abiertas

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        // 🔹 Si ya está abierta → se cierra y la quitamos de la lista
        content.style.maxHeight = null;
        abiertas = abiertas.filter(c => c !== content);
      } else {
        // 🔹 Si está cerrada → la abrimos
        content.style.maxHeight = content.scrollHeight + "px";
        abiertas.push(content);

        // 🔹 Si hay más de 2 abiertas → cerramos la primera que se abrió
        if (abiertas.length > 2) {
          const primera = abiertas.shift(); // saca la más antigua
          primera.style.maxHeight = null;
        }
      }
    });
  });
