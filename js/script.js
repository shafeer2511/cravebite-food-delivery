// ===============================
// 🍽️ MENU DATA (DATABASE MOCK)
// ===============================
let menuData = {

  r1: [
    { id: "p1", name: "Margherita Pizza", desc: "Classic tomato sauce, mozzarella, basil", price: 199, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { id: "p2", name: "Pepperoni Pizza", desc: "Pepperoni with cheese and tomato sauce", price: 249, image: "imgs/pizza2.jpg" },
    { id: "p3", name: "Farmhouse Pizza", desc: "Loaded with veggies and cheese", price: 279, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65" },
    { id: "p4", name: "Veggie Delight", desc: "Fresh vegetables with tangy sauce", price: 229, image: "imgs/veggie-delight.jpg" },
    { id: "p5", name: "White Sauce Pasta", desc: "Creamy pasta with herbs", price: 189, image: "imgs/white-sauce-pizza.jpg" },
    { id: "p6", name: "Garlic Bread", desc: "Crispy bread with garlic butter", price: 99, image: "imgs/garlic-bread.jpg" }
  ],

  r2: [
    { id: "b1", name: "Cheese Burger", desc: "Juicy patty with melted cheese", price: 149, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id: "b2", name: "Chicken Burger", desc: "Grilled chicken with fresh lettuce", price: 179, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
    { id: "b3", name: "Double Patty Burger", desc: "Two patties with extra cheese", price: 219, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
    { id: "b4", name: "French Fries", desc: "Crispy golden potato fries", price: 99, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f" },
    { id: "b5", name: "Loaded Fries", desc: "Fries topped with cheese and sauces", price: 149, image: "imgs/loaded-fries.jpg" },
    { id: "b6", name: "Cold Coffee", desc: "Chilled coffee with cream", price: 129, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" }
  ],

  r3: [
    { id: "i1", name: "Butter Chicken", desc: "Creamy tomato-based chicken curry", price: 299, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
    { id: "i2", name: "Paneer Butter Masala", desc: "Paneer in rich buttery gravy", price: 249, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
    { id: "i3", name: "Chicken Biryani", desc: "Spiced rice with tender chicken", price: 279, image: "imgs/chicken-biryani.jpg" },
    { id: "i4", name: "Veg Biryani", desc: "Aromatic rice with vegetables", price: 229, image: "imgs/veg-biryani.jpg" },
    { id: "i5", name: "Tandoori Roti", desc: "Traditional clay oven bread", price: 25, image: "imgs/tandoori-roti.jpg" },
    { id: "i6", name: "Gulab Jamun", desc: "Sweet milk-based dessert balls", price: 89, image: "imgs/gulab-jamun.jpg" }
  ]

};
// ===============================
// 📌 GLOBAL STATE
// ===============================
let selectedRestaurant = JSON.parse(localStorage.getItem("selectedRestaurant"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// 📌 PAGE DETECTION
// ===============================
let path = window.location.pathname;

if (path.includes("restaurants.html")) {
  handleRestaurantsPage();
}

if (path.includes("menu.html")) {
  handleMenuPage();
}

if (path.includes("cart.html")) {
  handleCartPage();
}


// ===============================
// 🍽️ RESTAURANTS PAGE
// ===============================
function handleRestaurantsPage() {
  let restaurantButtons = document.querySelectorAll(".view-menu");
  console.log(restaurantButtons);
  restaurantButtons.forEach(button => {
    button.addEventListener("click", function () {

      let restaurant = {
        id: button.dataset.id,
        name: button.dataset.name
      };
      
      localStorage.setItem("selectedRestaurant", JSON.stringify(restaurant));

      window.location.href = "menu.html";
    });
  });
}


// ===============================
// 📖 MENU PAGE
// ===============================
function handleMenuPage() {

  if (!selectedRestaurant) {
    alert("No restaurant selected");
    window.location.href = "restaurants.html";
    return;
  }

  // Show restaurant name
  let restaurantElement = document.getElementById("restaurant-name");
  if (restaurantElement) {
    restaurantElement.innerText = selectedRestaurant.name;
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

      // Restrict multiple restaurants
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

// ===============================
// 🛒 CART PAGE
// ===============================
function handleCartPage() {

  let cartContainer = document.getElementById("cart-items");

  if (!cartContainer) return;

  renderCart();

  // Checkout button
  let checkoutBtn = document.getElementById("checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Cart is empty");
        return;
      }

      window.location.href = "checkout.html";
    });
  }
}


// ===============================
// 🔁 RENDER CART
// ===============================
function renderCart() {

  let cartContainer = document.getElementById("cart-items");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  // 🔥 Empty Cart Handling
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
        <button class="quantity-btn" onclick="decreaseQty('${item.id}')">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn" onclick="increaseQty('${item.id}')">+</button>
      </div>
    `;

    cartContainer.appendChild(div);
  });

  updateTotal();
}


// ===============================
// ➕➖ QUANTITY CONTROL
// ===============================
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


// ===============================
// 💾 STORAGE UPDATE
// ===============================
function updateCartStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// 💰 TOTAL CALCULATION
// ===============================
function updateTotal() {

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let delivery = cart.length > 0 ? 50 : 0;
  let tax = Math.floor(subtotal * 0.05);
  let total = subtotal + delivery + tax;

  let subEl = document.getElementById("subtotal");
  let taxEl = document.getElementById("tax");
  let totalEl = document.getElementById("total");

  if (subEl) subEl.innerText = "₹" + subtotal;
  if (taxEl) taxEl.innerText = "₹" + tax;
  if (totalEl) totalEl.innerText = "₹" + total;
}