// ITERATION 1

function updateSubtotal(product) { //llamado por la linea 16

  let price = Number(product.querySelector(".price span").innerText)
  let quantity = Number(product.querySelector('.quantity input').value)
  product.querySelector(".subtotal span").innerText = price * quantity
  
}

function calculateAll() {// llamado por la linea 34
 
  const  allProducts = document.querySelectorAll('.product') 
  let total = 0
  allProducts.forEach((product)=>{
    updateSubtotal(product)
    let subtotal = Number(product.querySelector(".subtotal span").innerText)
    total += subtotal
  })

  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) { //llamada por la línea 37
  const product = event.currentTarget.parentNode.parentNode;
  const body = product.parentNode
  body.removeChild(product)
  
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll(".btn-remove")
  removeBtns.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeProduct);
  })
  let createBtn = document.querySelector("#create")
  createBtn.addEventListener('click', createProduct);
  
})
// ITERATION 5

function createProduct() {

  let productNameInput = document.querySelector(".create-product td input").value
  let unitPrice = document.querySelector(".new-product-price input").value
  console.log(unitPrice)
  
  const tBody = document.querySelector("tbody")
  tBody.innerHTML += `<tr class="product">
          <td class="name">
            <span>${productNameInput}</span>
          </td>
          <td class="price">$<span>${unitPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`

  const removeBtnsUpdate = document.querySelectorAll(".btn-remove")
  removeBtnsUpdate.forEach((removeBtn)=>{
    removeBtn.addEventListener('click', removeProduct);
  })
  
}
