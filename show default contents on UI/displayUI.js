/* get input values */
const getInputValueById = (id) => {
    const getInput = document.getElementById(id);
    const getInputValue = getInput.value;
    getInput.value = '';
    return getInputValue;
}

/* save products to LS */
const displayProductsOnUI = () => {
    const Product = getInputValueById('productInfo');
    const Quantity = getInputValueById('productQuantity');
    showProductsOnUI(Product, Quantity);
    /* save to LS simple way */
    // localStorage.setItem(getProduct, getQuantity);
    saveItemToLocalStorage(Product, Quantity)
}

/* get general name info from local storage */
const getInfoFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

/* save products to LS as object */
const saveItemToLocalStorage = (Product, Quantity) => {
    const cart = getInfoFromLocalStorage();
    /* add product to the object as property */
    cart[Product] = Quantity;
    const cartStringified = JSON.stringify(cart);

    /* save to LS */
    localStorage.setItem('cart', cartStringified);
}

/* display products on UI */
const showProductsOnUI = (Product, Quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${Product} : ${Quantity}`;
    ulContainer.appendChild(li);
}

/* display previously stored values on UI */
const displayStoredValues = () => {
    const cart = getInfoFromLocalStorage();
    for (const Product in cart) {
        const Quantity = cart[Product];
        showProductsOnUI(Product, Quantity);
    }
}

displayStoredValues();
