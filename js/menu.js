import { menuData } from "./data.js";


let selectedRestaurant = JSON.parse(localStorage.getItem("selectedRestaurant"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Menu Page
export function handleMenuPage() {

    if (!selectedRestaurant) {
        alert("No restaurant selected");
        window.location.href = "../pages/restaurants.html";
        return;
    }

    // Show restaurant name
    let restaurantElement = document.getElementById("restaurant-name");
    if (restaurantElement) {
        restaurantElement.innerText = selectedRestaurant.name;
    }

    let restaurantCuisineRating = document.getElementById("restaurantcuisineRating");
    if (restaurantCuisineRating) {
        restaurantCuisineRating.innerText = selectedRestaurant.cuisine + " • ⭐" + selectedRestaurant.rating;
    }

    let menuContainer = document.getElementById("menu-items");
    if (!menuContainer) return;

    let items = menuData[selectedRestaurant.id];

    if (!items) {
        menuContainer.innerHTML = "<h2>No items available</h2>";
        return;
    }

    menuContainer.innerHTML = "";

    items.forEach(item => {

        let div = document.createElement("div");

        // ✅ IMPORTANT: match your CSS class
        div.className = "menu-item";

        div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">

      <h3 class="item-name">${item.name}</h3>

      <p class="item-desc">${item.desc || "Delicious food item"}</p>

      <p class="price">₹${item.price}</p>

      <button 
        class="btn add-to-cart"
        data-id="${item.id}"
        data-name="${item.name}"
        data-price="${item.price}"
        data-image="${item.image}"
      >
        Add to Cart
      </button>
    `;

        menuContainer.appendChild(div);
    });

    attachAddToCartEvents();
}
function attachAddToCartEvents() {
    let buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            let item = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseInt(button.dataset.price),
                image: button.dataset.image,
                quantity: 1,
                restaurant: selectedRestaurant.name
            };

            if (cart.length > 0 && cart[0].restaurant !== selectedRestaurant.name) {
                let confirmClear = confirm("Cart has items from another restaurant. Clear cart?");

                if (confirmClear) {
                    cart = [];
                } else {
                    return;
                }
            }

            let existingItem = cart.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(item);
            }

            updateCartStorage();
            alert("Item added to cart");
        });
    });
}

function updateCartStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
