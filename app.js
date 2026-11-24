const containerEl = document.querySelector(".products-grid");
const prodCountEl = document.querySelector(".cart-count");
const prodCounterDivEl = document.querySelector(".prod-counter")
const searchEl = document.querySelector(".search");

let products = [];

fetch("https://jsonbek.uz/api/products")
  .then((response) => response.json())
  .then((json) => swapper(json));

function swapper(arr) {
  arr.forEach((item) => products.push(item));
  updateUI(products);
}

window.prodCounter = function () {
  const buyBtnEl = document.querySelector(".buy-btn");
  prodCounterDivEl.classList.remove("hidden");

  let count = Number(prodCountEl.textContent++);
};

searchEl.addEventListener("input", (e) => {
  let searchInput = e.target.value.trim();
  console.log(searchInput);

  let new_products = products.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  );
  updateUI(new_products);
});
function updateUI(arr) {
  containerEl.innerHTML = "";
  arr.forEach((item) => {
    containerEl.innerHTML += `<div class="card">
          <div class="card-img-box">
          <span class="badge ${item.available ? "available" : "unavailable"}">
          ${item.available ? "Mavjud" : "Tugagan"}
          </span>
          <span class="rate">⭐ ${item.rate}</span>
          <img src="${item.image}" alt="${item.title}" />
          </div>
          <div class="card-body">
          <p class="card-origin">📍 ${item.origin}</p>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
          
          <div class="card-footer">
          <span class="card-price">${item.price}</span>
          <button onclick="prodCounter(this)" id = "but_btn" class="buy-btn" ${!item.available ? "disabled" : ""}>
        ${item.available ? "Sotib olish" : "Yo‘q"}
        </button>
        </div>
        </div>
        </div>
        `;
  });
}

console.log(products);
