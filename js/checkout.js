import { calculateTotals } from "./utils/priceUtils.js";

import { getCart } from "./storage.js";

// ===============================
// 📦 GLOBAL STATE
// ===============================
let cart = getCart();
let addresses = JSON.parse(localStorage.getItem("addresses")) || [];

//Checkout page handler
export function handleCheckoutPage() {
    renderAddresses();
    handleAddAddressToggle();
    handleSaveAddress();
    handleDeleteAddress();
    renderSummary();
    handlePayment();
}

//Render Logic (Main logic) 
function renderAddresses() {
    const list = document.getElementById("address-list");
    const emptyState = document.getElementById("no-address");

    if (!list) return;

    list.innerHTML = "";

    if (addresses.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    addresses.forEach((addr, index) => {
        const div = document.createElement("div");
        div.classList.add("address-card");

        div.innerHTML = `
            <label class="address-wrapper">
                <input type="radio" name="address" ${index === 0 ? "checked" : ""}>

                <div class="address-content">
                    <div class="address-header">
                        <span class="address-name">${addr.name}</span>

                        <div class="address-actions">
                            <span class="address-badge">Home</span>

                            <button class="delete-btn" data-id="${addr.id}" title="Delete Address">
                                <span class="material-icons">delete_outline</span>
                            </button>
                        </div>
                    </div>

                    <div class="address-body">
                        <p>${addr.street}</p>
                        <p>${addr.city} - ${addr.pincode}</p>
                    </div>
                </div>
            </label>
            `;

        list.appendChild(div);
    });
}

function handleAddAddressToggle() {
    const btn = document.getElementById("add-address-btn");
    const form = document.getElementById("address-form");

    if (!btn || !form) return;

    btn.addEventListener("click", () => {
        const isHidden = form.classList.contains("hidden");

        if (isHidden) {
            form.classList.remove("hidden");
            btn.textContent = "Cancel";
        } else {
            form.classList.add("hidden");
            btn.textContent = "+ Add Address";
        }
    });
}

function handleSaveAddress() {
    const saveBtn = document.getElementById("save-address-btn");
    const form = document.getElementById("address-form");
    const btn = document.getElementById("add-address-btn");


    if (!saveBtn) return;

    saveBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value.trim();
        const street = document.getElementById("street").value.trim();
        const city = document.getElementById("city").value.trim();
        const pincode = document.getElementById("pincode").value.trim();

        if (!name || !street || !city || !pincode) {
            alert("Fill all fields");
            return;
        }

        const newAddress = {
            id: Date.now().toString(),
            name,
            street,
            city,
            pincode
        };

        addresses.push(newAddress);
        localStorage.setItem("addresses", JSON.stringify(addresses));

        // reset form
        form.classList.add("hidden");
        btn.textContent = "+ Add Address";

        document.getElementById("name").value = "";
        document.getElementById("street").value = "";
        document.getElementById("city").value = "";
        document.getElementById("pincode").value = "";
        renderAddresses();
    });
}

function handleDeleteAddress() {
    const list = document.getElementById("address-list");

    if (!list) return;

    list.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (deleteBtn) {
            e.preventDefault(); // Prevents radio inside label from being toggled
            const id = deleteBtn.dataset.id;

            if (!confirm("Delete this address?")) return;

            let updated = addresses.filter(addr => addr.id !== id);

            addresses = updated;
            localStorage.setItem("addresses", JSON.stringify(updated));

            renderAddresses();
        }
    });
}

function handlePayment() {
    const btn = document.getElementById("payment-btn");

    if (!btn) return;

    btn.addEventListener("click", () => {

        if (addresses.length === 0) {
            alert("Please add an address first");
            return;
        }

        const selected = document.querySelector('input[name="address"]:checked');

        if (!selected) {
            alert("Select an address");
            return;
        }

        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        window.location.href = "../pages/payment.html";
    });
}

function renderSummary() {

    const { subtotal, delivery, tax, total } = calculateTotals(cart);

    const subEl = document.getElementById("subtotal");
    const delEl = document.getElementById("delivery");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    if (subEl) subEl.innerText = "₹" + subtotal;
    if (delEl) delEl.innerText = "₹" + delivery;
    if (taxEl) taxEl.innerText = "₹" + tax;
    if (totalEl) totalEl.innerText = "₹" + total;
}