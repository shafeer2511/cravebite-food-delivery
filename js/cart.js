import { calculateTotals } from "./utils/priceUtils.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// 🛒 CART PAGE
// ===============================


export function handleCartPage() {

    let cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    renderCart();

    let checkoutBtn = document.getElementById("checkout-btn");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("Cart is empty");
                return;
            }

            window.location.href = "../pages/checkout.html";
        });
    }
}

function renderCart() {

    let cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h2>Your cart is empty 🛒</h2>";
        updateTotal();
        return;
    }

    cart.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("cart-product");

        div.innerHTML = `
      <div class="product-info">
        <img src="${item.image}">
        <div class="product-details">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
        </div>
      </div>
        
      <div class="quantity-control">
        <button class="quantity-btn decrease">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn increase">+</button>
      </div>
    `;

        // ✅ Attach events AFTER creating element
        div.querySelector(".increase").addEventListener("click", () => {
            increaseQty(item.id);
        });

        div.querySelector(".decrease").addEventListener("click", () => {
            decreaseQty(item.id);
        });

        cartContainer.appendChild(div);
    });

    updateTotal();
}

function increaseQty(id) {
    let item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity++;
    updateCartStorage();
    renderCart();
}

function decreaseQty(id) {
    let item = cart.find(i => i.id === id);
    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(i => i.id !== id);
    }

    updateCartStorage();
    renderCart();
}

function updateCartStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// 💰 TOTAL CALCULATION
// ===============================
function updateTotal() {

    const { subtotal, delivery, tax, total } = calculateTotals(cart);

    let subEl = document.getElementById("subtotal");
    let taxEl = document.getElementById("tax");
    let totalEl = document.getElementById("total");

    if (subEl) subEl.innerText = "₹" + subtotal;
    if (taxEl) taxEl.innerText = "₹" + tax;
    if (totalEl) totalEl.innerText = "₹" + total;
}
