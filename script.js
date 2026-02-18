
const products = [
    { name: "Skin Tint", price: 499, category: "makeup", type: "foundation", img: "https://images-static.nykaa.com/media/catalog/product/b/1/b108999INSIG00001374_01.jpg?tr=w-344,h-344,cm-pad_resize" },
    { name: "Matte Lipstick", price: 399, category: "makeup", type: "lipstick", img: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1175603/P60rSrD_LqV-1175603-1.jpg" },
    { name: "Mascara", price: 450, category: "makeup", type: "mascara", img: "https://images-static.nykaa.com/media/catalog/product/6/e/6e5ce49MARSX00000419ab_ab1.jpg?tr=w-344,h-344,cm-pad_resize" },
    { name: "Blush", price: 550, category: "makeup", type: "blush", img: "https://m.media-amazon.com/images/I/51wpBeniJFL._SX679_.jpg" },
    { name: "Cleanser", price: 350, category: "skincare", type: "cleanser", img: "https://m.media-amazon.com/images/I/41lVsqexB5L._SY300_SX300_QL70_FMwebp_.jpg" },
    { name: "Moisturizer", price: 599, category: "skincare", type: "moisturizer", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTwYl1hOHQQK_qJKj-8D7vwSp70BDReyKef_k_0m9-_S-cmN2vAr_XdV9Dm4Et_Fp5aLgEbyTQywv4H_BTQ3qXwPjBwyEv9w" },
    { name: "Sunscreen", price: 699, category: "skincare", type: "sunscreen", img: "https://m.media-amazon.com/images/I/31+54OHL8WL._SY300_SX300_QL70_FMwebp_.jpg" },
    { name: "Serum", price: 799, category: "skincare", type: "serum", img: "https://m.media-amazon.com/images/I/415TsX6-jzL._SY300_SX300_QL70_FMwebp_.jpg" }
];

function showCategory(filter) {
    let container = document.getElementById("productList");
    container.innerHTML = "";

    let filtered = filter === "all" ? products : products.filter(p => p.category === filter || p.type === filter);

    filtered.forEach(product => {
        let card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `<img src="${product.img}"> <h3>${product.name}</h3> <p>₹${product.price}</p> <button onclick="addToCart('${product.name}', ${product.price}, '${product.img}')">Add to Cart</button>`;
        container.appendChild(card);
    });
}
let total = 0;
let cartCount = 0;

function addToCart(name, price, img) {
    let cartItems = document.getElementById("cartItems");

    let item = document.createElement("div");
    item.className = "cart-item";

    item.innerHTML = `
<img src="${img}">
<div>
<div>${name}</div>
<div>₹${price}</div>
</div>
`;
    cartItems.appendChild(item);
    total += price;
    document.getElementById("totalPrice").innerText = total;
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}
function confirmOrder() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
    }
    else {
        alert("Order Confirmed! Thank you for shopping with Glow Beauty.");
    }
}
function toggleCart() {
    document.getElementById("cartBox").classList.toggle("show");
}
function closeCart() {
    document.getElementById("cartBox").classList.remove("show");
}
showCategory("all");
