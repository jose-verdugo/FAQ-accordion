const arrow = document.querySelectorAll(".Main_arrow");
const faq = document.querySelectorAll(".Main_info");
let elementoActivo = null;

// arrow.forEach((elemento, index) => {
//   elemento.addEventListener("click", () => {
//     if (faq[index].classList.contains("Main_info--activo")) {
//       faq[index].classList.remove("Main_info--activo");
//       elementoActivo = null;
//       return;
//     }
//     if (elementoActivo !== null) {
//       elementoActivo.classList.remove("Main_info--activo");
//     }
//     faq[index].classList.add("Main_info--activo");
//     elementoActivo = faq[index];
//   });
// });

arrow.forEach((elemento, index) => {
  elemento.addEventListener("click", () => {
    if (faq[index].classList.contains("Main_info--activo")) {
      faq[index].classList.remove("Main_info--activo");
      elemento.classList.remove("Main_arrow--rotated"); // Removemos la clase de rotación
      elementoActivo = null;
      return;
    }
    if (elementoActivo !== null) {
      elementoActivo.classList.remove("Main_info--activo");
      elementoActivo.previousElementSibling.classList.remove(
        "Main_arrow--rotated"
      ); // Removemos la clase de rotación del elemento activo anterior
    }
    faq[index].classList.add("Main_info--activo");
    elemento.classList.add("Main_arrow--rotated"); // Agregamos la clase de rotación al elemento actual
    elementoActivo = faq[index];
  });
});
