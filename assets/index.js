let price = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = price;
const precioElemento = document.querySelector(".precio-inicial");
const cantidadElemento = document.querySelector(".cantidad");
const totalElemento = document.querySelector(".valor-total");

const precioBase = parseFloat(precioElemento.textContent);

function actualizarTotal() {
  const cantidad = parseInt(cantidadElemento.textContent);
  const total = precioBase * cantidad;
  totalElemento.textContent = total.toFixed(2);
}

document.querySelector(".add").addEventListener("click", function () {
  let cantidad = parseInt(cantidadElemento.textContent);
  cantidad++;
  cantidadElemento.textContent = cantidad;
  actualizarTotal();
});

document.querySelector(".subtract").addEventListener("click", function () {
  let cantidad = parseInt(cantidadElemento.textContent);
  if (cantidad > 0) {
    cantidad--;
    cantidadElemento.textContent = cantidad;
    actualizarTotal();
  }
});
