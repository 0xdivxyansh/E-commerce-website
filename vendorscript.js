const vendorList = document.getElementById('vendorList');
const productForm = document.getElementById('productForm');
const toggleDarkMode = document.getElementById('toggleDarkMode');

// Load data from localStorage
let vendors = JSON.parse(localStorage.getItem('vendors')) || {};

// Render vendor and product data
function renderVendors() {
    vendorList.innerHTML = '';
    for (const vendor in vendors) {
        const vendorSection = document.createElement('div');
        vendorSection.classList.add('vendor-card');
        vendorSection.innerHTML = `
            <h3>${vendor}</h3>
            <ul>
                ${vendors[vendor]
                    .map(
                        (product) => `
                    <li>
                        <img src="${product.image}" alt="${product.name}" width="50">
                        <span>${product.name} - $${product.price}</span>
                    </li>
                `
                    )
                    .join('')}
            </ul>
        `;
        vendorList.appendChild(vendorSection);
    }
}

// Handle form submission
productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const vendorName = document.getElementById('vendorName').value;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    if (!vendors[vendorName]) vendors[vendorName] = [];

    vendors[vendorName].push({
        name: productName,
        category,
        price: productPrice,
        image: productImage,
    });

    localStorage.setItem('vendors', JSON.stringify(vendors));
    renderVendors();
    productForm.reset();
});

// Toggle Dark Mode
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize App
renderVendors();
