// Store owners and their products
let owners = [];
let currentOwner = null;

document.getElementById("next-button").addEventListener("click", () => {
  const ownerName = document.getElementById("owner-name").value;
  const shopName = document.getElementById("shop-name").value;

  currentOwner = {
    name: ownerName,
    shop: shopName,
    products: [],
  };
  owners.push(currentOwner);

  document.getElementById("owner-form").style.display = "none";
  document.getElementById("product-form").style.display = "block";
});

document.getElementById("discount").addEventListener("change", (e) => {
  const discountContainer = document.getElementById("discount-percentage-container");
  discountContainer.style.display = e.target.value === "yes" ? "block" : "none";
});

document.getElementById("add-to-cart-button").addEventListener("click", () => {
  const productPhoto = document.getElementById("product-photo").files[0];
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;
  const discount = document.getElementById("discount").value === "yes"
    ? `${document.getElementById("discount-percentage").value}%`
    : "No Discount";

  const reader = new FileReader();
  reader.onload = function () {
    const product = {
      name: productName,
      price: productPrice,
      discount: discount,
      photo: reader.result,
    };
    currentOwner.products.push(product);
    updateDisplay();
  };
  reader.readAsDataURL(productPhoto);

  document.getElementById("product-form").reset();
});

document.getElementById("back-to-owner-button").addEventListener("click", () => {
  document.getElementById("product-form").style.display = "none";
  document.getElementById("owner-form").style.display = "block";
});

function updateDisplay() {
  const displaySection = document.getElementById("display-section");
  displaySection.innerHTML = "";
  owners.forEach((owner) => {
    const ownerCard = document.createElement("div");
    ownerCard.classList.add("owner-card");
    ownerCard.innerHTML = `
      <h2>${owner.name}'s Shop (${owner.shop})</h2>
      <div class="product-list"></div>
    `;

    const productList = ownerCard.querySelector(".product-list");
    owner.products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" />
        <span>${product.name} - $${product.price} (${product.discount})</span>
      `;
      productList.appendChild(productItem);
    });

    displaySection.appendChild(ownerCard);
  });
}
