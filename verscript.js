// Sample product data (in a real application, this would come from a backend API)
const products = [
    { id: 1, name: 'T-Shirt', image: 'tshirt.jpg', price: 19.99, category: 'Fashion' },
    { id: 2, name: 'Jeans', image: 'jeans.jpg', price: 49.99, category: 'Fashion' },
    { id: 3, name: 'Sneakers', image: 'sneaker.jpg', price: 79.99, category: 'Fashion' },
    { id: 4, name: 'Apples', image: 'apple.jpg', price: 2.99, category: 'Grocery' },
    { id: 5, name: 'Bread', image: 'bread.jpg', price: 3.99, category: 'Grocery' },
    { id: 6, name: 'Smartphone', image: 'mobile.jpg', price: 599.99, category: 'Electronics' },
    { id: 7, name: 'Notebook', image: 'book.jpg', price: 4.99, category: 'Stationery' },
    { id: 8, name: 'Aspirin', image: 'asp.jpg', price: 7.99, category: 'Pharmacy' },
];

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})" style='padding:10px; border-radius: 20px; background-color: rgba(255,99,83); border:none; '>Add to Cart</button>
        </div>
    `;
}

// Function to display AI recommendations (simplified)
function displayAIRecommendations() {
    const aiRecommendationsElement = document.getElementById('aiRecommendations');
    if (aiRecommendationsElement) {
        const recommendations = products.slice(0, 3); // Just use the first 3 products as recommendations
        aiRecommendationsElement.innerHTML = recommendations.map(createProductCard).join('');
    }
}

// Function to display products
function displayProducts() {
    const productGridElement = document.getElementById('productGrid');
    if (productGridElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        let filteredProducts = products;
        if (category) {
            filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }

        productGridElement.innerHTML = filteredProducts.map(createProductCard).join('');
    }
}

// Function to add a product to the cart (simplified)
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // In a real application, you would update the cart state and possibly send a request to a backend server
}

// Initialize the page
function init() {
    displayAIRecommendations();
    displayProducts();
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

