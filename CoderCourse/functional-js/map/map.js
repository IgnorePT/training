const cart = [
    {name: 'Caneta', qty: 10, price: 7.99},
    {name: 'Inpressora', qty: 0, price: 649.50},
    {name: 'Caderno', qty: 4, price: 27.10},
    {name: 'Lapis', qty: 3, price: 5.82},
    {name: 'Tseoura', qty: 1, price: 19.20},
];

const getProductName = product => product.name

const productOnCart = cart.map(getProductName);

console.log(productOnCart);

const getProductTotalOnCart = product => product.qty * product.price

const totalPerProduct = cart.map(getProductTotalOnCart);

console.log(totalPerProduct);
