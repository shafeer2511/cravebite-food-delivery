export function getSelectedRestaurant() {
    return JSON.parse(localStorage.getItem("selectedRestaurant"));
}

export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}