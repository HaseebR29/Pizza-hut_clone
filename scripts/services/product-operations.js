// contains the logic for fetching
//  adding, sorting, searching
//  deletion, updation

/*
    it talk to network layer to brings the JSON, and
    convert JSON into Objects and vice-versa
*/

import Product from "../models/products.js";
import makeNetworkCall from "./api-client.js";
// import options from "../payment/razorpay.js";

const productOperations = {
    //AS product array scope is limited to loadProducts so we make key value pair
    products: [],
    search(pizzaId) {
        const product = this.products.
            find(currentProduct => currentProduct.id == pizzaId);
        console.log('Product Found ', product);
        product.isAddedInCart = true;
        console.log('Arrray ', this.products);
        return product;
    },

    getProductsInCart() {
        const productInBasket = this.products.filter(product => product.isAddedInCart);
        return productInBasket;
    },
    async loadProducts() {
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza => {
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url)
            return currentPizza;
        })
        console.log('Product array ', productsArray);
        this.products = productsArray; // assign it into products array 
        return productsArray;
    },

    // makePayment() {
    //     var rzp1 = new Razorpay(options);
    //     document.getElementById('rzp-button1').onclick = function (e) {
    //         rzp1.open();
    //         e.preventDefault();
    //     }
    // },

    sortProducts() {

    },
    searchProducts() {
    }
}

export default productOperations;