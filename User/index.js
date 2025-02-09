const API_URL = "https://67a5bf43c0ac39787a1f451c.mockapi.io/Product";

async function fetchProducts() {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    let productList = document.getElementById("product-list");

    productList.innerHTML = "";
    data.forEach((item) => {
      let productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.brand}</h3>
                <h3>${item.name}</h3>
                <p>Giá: ${item.price} VND</p>
                <button class="add_cart_bt" onclick="addToCart(${this.id})">Add To Cart</button>
            `;
      productList.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm:", error);
  }
}
function filterProducts() {
  let searchTerm = document.getElementById("search").value.toLowerCase();
  let filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}

function addToCart(productId) {
  let product = allProducts.find((p) => p.id == productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  let cartList = document.getElementById("cart-list");
  let totalPrice = document.getElementById("total-price");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += parseFloat(item.price);
    cartList.innerHTML += `<li>${item.name} - ${item.price} VND <button onclick="removeFromCart(${index})">Xóa</button></li>`;
  });
  totalPrice.innerText = `Tổng giá: ${total} VND`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

fetchProducts();
