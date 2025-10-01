// Product array
const products = [
    { id: 1, name: "Widget A" },
    { id: 2, name: "Widget B" },
    { id: 3, name: "Widget C" },
    { id: 4, name: "Gadget X" },
    { id: 5, name: "Gadget Y" }
];

// Populate product select dynamically
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
