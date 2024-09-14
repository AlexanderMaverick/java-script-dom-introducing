let price = 400000;

precioSpan = document.querySelector(".initialPrice");
precioSpan.innerHTML = price;
const elementPrice = document.querySelector(".initialPrice");
const elementQuanty = document.querySelector(".quanty");
const elementTotal = document.querySelector(".totalValue");
const basePrice = parseFloat(elementPrice.textContent);

function totalUpdate() {
  const quanty = parseInt(elementQuanty.textContent);
  const total = basePrice * quanty;
  elementTotal.textContent = total.toFixed(2);
}

document.querySelector(".add").addEventListener("click", function () {
  let quanty = parseInt(elementQuanty.textContent);
  quanty++;
  elementQuanty.textContent = quanty;
  totalUpdate();
});

document.querySelector(".subtract").addEventListener("click", function () {
  let quanty = parseInt(elementQuanty.textContent);
  if (quanty > 0) {
    quanty--;
    elementQuanty.textContent = quanty;
    totalUpdate();
  }
});
