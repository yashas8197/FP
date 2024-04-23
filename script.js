const products = [
  { id: 1, name: "Laptop", price: 24000, color: "red" },
  { id: 2, name: "Smartphone", price: 17000, color: "black" },
  { id: 3, name: "Tablet", price: 4500, color: "silver" },
  { id: 4, name: "Headphones", price: 5000, color: "black" },
  { id: 5, name: "Speaker", price: 10000, color: "silver" },
  { id: 6, name: "TV", price: 15000, color: "black" },
  { id: 7, name: "Earphones", price: 3000, color: "white" },
  { id: 8, name: "Smartwatch", price: 25000, color: "black" },
];

const productListContainer = document.querySelector("#productList");
const showExpensiveCheckbox = document.querySelector('#showExpensive')
const totalProducts = document.querySelector('#totalProducts')
const totalInventoryCost = document.querySelector('#totalInventoryCost')

function renderProducts(isExpensive) {

  const filterByExpence = isExpensive ? products.filter(product => product.price > 5000 && product.color === "black") : products

  const getTotalProducts = filterByExpence.length
  const getTotalInventoryCost = filterByExpence.reduce((acc, curr) => acc + curr.price, 0)

  const productListHTML = filterByExpence.map(product => `
    <li>
      <strong>Name: </strong> ${product.name} <br/>
      <strong>Price: </strong> $${product.price}<br/>
      <strong>Color: </strong> ${product.color}<br/>
      <hr/>
    </li>
  `)

  productListContainer.innerHTML = productListHTML
  totalProducts.textContent = getTotalProducts
  totalInventoryCost.textContent = "$" + getTotalInventoryCost + ".00"
}

renderProducts()

showExpensiveCheckbox.addEventListener('change', function() {
  renderProducts(showExpensiveCheckbox.checked)
})






