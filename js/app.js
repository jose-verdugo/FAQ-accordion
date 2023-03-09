const arrow = document.querySelectorAll(".Main_arrow");
const faq = document.querySelectorAll(".Main_info");
let elementoActivo = null;
arrow.forEach((elemento, index) => {
  elemento.addEventListener("click", () => {
    if (faq[index].classList.contains("Main_info--activo")) {
      faq[index].classList.remove("Main_info--activo");
      elementoActivo = null;
      return;
    }
    if (elementoActivo !== null) {
      elementoActivo.classList.remove("Main_info--activo");
    }
    faq[index].classList.add("Main_info--activo");
    elementoActivo = faq[index];
  });
});
