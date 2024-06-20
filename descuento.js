const form = document.getElementById("form-descuento");
function handleForm(event) {
  event.preventDefault();
  const precio = document.getElementById("precio").value;
  const descuento = document.getElementById("descuento").value;
  const p = document.getElementById("resultado");
  const sp = document.getElementById("descuento-pesos");
  const resultado = (precio * (100 - descuento)) / 100;
  p.innerText = Math.round(resultado);
  sp.innerText = Math.round(precio - resultado);
}
form.addEventListener("submit", handleForm);
