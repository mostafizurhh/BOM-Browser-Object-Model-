const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const getProduct = getInputValueById('productInputField');
    const getQuantity = getInputValueById('quantityInputField');
    console.log(getProduct, getQuantity);
    displayProducts(getProduct, getQuantity);
    localStorage.setItem(getProduct, getQuantity);
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('ulContainer');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}